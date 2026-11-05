// Lighthouse CI audit hook. This dedicated headless fixture never uses the user's browser.
const { writeFile } = require('node:fs/promises');
const axePackage = require('axe-core/package.json');
const assert = require('node:assert/strict');
const inventory = require('../docs/navegacion-movil/contenido-anterior.json');
let audited = false;
const routes = ['', 'particulares/', 'empresas/', 'reclamaciones/', 'el-despacho/', 'contacto/', 'area-clientes/', 'aviso-legal/', 'privacidad/', 'cookies/', '404.html'];

module.exports = async (browser, { url }) => {
  if (audited) return;
  const origin = new URL(url).origin;
  const results = [];
  const page = await browser.newPage();
  async function check(route, width, state) {
    const result = await page.evaluate(async () => {
      const result = await window.axe.run(document, {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] },
        resultTypes: ['violations', 'incomplete'],
      });
      const compact = rows => rows.map(r => ({ id: r.id, impact: r.impact, help: r.help, helpUrl: r.helpUrl, nodes: r.nodes.map(n => ({ target: n.target, html: n.html, failureSummary: n.failureSummary })) }));
      return { violations: compact(result.violations), incomplete: compact(result.incomplete) };
    });
    results.push({ route, width, state, ...result });
  }
  try {
    for (const width of [390, 1440]) {
      await page.setViewport({ width, height: width === 390 ? 844 : 1000, deviceScaleFactor: 1 });
      for (const route of routes) {
        await page.goto(`${origin}/${route}`, { waitUntil: 'networkidle0' });
        await page.evaluate(async () => {
          await document.fonts.ready;
          await Promise.all(document.getAnimations().map(a => a.finished.catch(() => {})));
        });
        await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') });
        await check(route, width, 'default');
        if (inventory[route.replace('/', '')]) {
          const items = await page.$$eval('.service-list li', nodes => nodes.map(n => n.textContent.trim()));
          assert.deepEqual(items.sort(), [...inventory[route.replace('/', '')].items].sort(), `Preserved service inventory: ${route}`);
        }
        if (width === 390 && ['particulares/', 'empresas/', 'reclamaciones/'].includes(route)) {
          const target = route === 'particulares/' ? 'penal' : route === 'empresas/' ? 'contable-fiscal' : 'ejecucion';
          assert.equal(await page.$eval('.area-index-mobile', n => n.open), false);
          await page.click('.area-index-mobile summary');
          await check(route, width, 'area-index-open');
          await page.click(`.area-index-mobile a[href="#${target}"]`);
          await page.waitForFunction(id => document.activeElement?.id === id, {}, target);
          const destination = await page.evaluate(id => ({
            open: document.querySelector('.area-index-mobile').open,
            top: document.getElementById(id).getBoundingClientRect().top,
            bottom: document.querySelector('[data-area-index]').getBoundingClientRect().bottom,
          }), target);
          assert.equal(destination.open, false);
          assert.ok(destination.top >= destination.bottom + 12, `Unobscured section: ${route}`);
          await page.waitForFunction(id => [...document.querySelectorAll('[data-area-index] a[aria-current="location"]')].length === 2 && [...document.querySelectorAll('[data-area-index] a[aria-current="location"]')].every(a => a.hash === `#${id}`), {}, target);
          const fragment = new URL(page.url()).hash;
          await page.evaluate(() => window.scrollTo(0, 0));
          await page.waitForFunction(() => document.querySelectorAll('[data-area-index] a[aria-current]').length === 0);
          assert.equal(new URL(page.url()).hash, fragment, 'Reading position must not rewrite the URL');
          assert.equal(await page.$eval(`#${target}`, n => n === document.activeElement), true, 'Reading position must not steal focus');
          await page.$eval(`#${target}`, n => n.scrollIntoView());
          await page.waitForFunction(id => document.querySelector(`.area-index-mobile a[href="#${id}"]`)?.getAttribute('aria-current') === 'location', {}, target);
          await check(route, width, 'area-index-destination');
          await page.click('.area-index-mobile summary');
          await page.keyboard.press('Escape');
          assert.equal(await page.$eval('.area-index-mobile', n => n.open), false);
          assert.equal(await page.$eval('.area-index-mobile summary', n => n === document.activeElement), true);
          await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
          assert.equal(await page.$eval('.area-index-caret', n => getComputedStyle(n).transitionDuration), '0s');
          await page.emulateMediaFeatures([]);
        }
        if (width === 390 && route === '') {
          await page.click('#menu-toggle');
          await page.waitForFunction(() => document.querySelector('#menu-toggle').getAttribute('aria-expanded') === 'true');
          await check(route, width, 'menu-open');
        }
        if (width === 390 && route === 'el-despacho/') {
          await page.click('summary');
          await check(route, width, 'professional-details-open');
        }
      }
    }
    // With scripts disabled the native disclosure stays in normal flow; links remain usable.
    await page.setJavaScriptEnabled(false);
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
    await page.goto(`${origin}/particulares/`, { waitUntil: 'networkidle0' });
    await page.click('.area-index-mobile summary');
    assert.equal(await page.$eval('.area-index-mobile', n => n.open), true);
    await page.click('.area-index-mobile a[href="#penal"]');
    assert.equal(new URL(page.url()).hash, '#penal');
    assert.equal(await page.$eval('[data-area-index]', n => getComputedStyle(n).position), 'static');
    await page.setJavaScriptEnabled(true);
    await writeFile('.quality/axe.json', JSON.stringify({ engine: `axe-core ${axePackage.version}`, results }, null, 2));
    audited = true;
    console.log(`axe-core: ${results.length} page states checked`);
  } finally {
    await page.close();
  }
};
