// Exercise actual component scripts with reduced motion enabled, without a browser override.
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import assert from 'node:assert/strict';
import ts from 'typescript';

const script = async file => {
  const source = await readFile(file, 'utf8');
  const match = source.match(/<script>([\s\S]*?)<\/script>/);
  assert.ok(match, `Missing script in ${file}`);
  return ts.transpileModule(match[1], { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;
};
const header = await script('src/components/Header.astro');
const reveal = await script('src/components/Reveal.astro');
const tokenSource = await readFile('src/styles/tokens.css', 'utf8');
const motionTokens = Object.fromEntries([...tokenSource.matchAll(/(--motion-[\w-]+):\s*([^;]+);/g)].map(m => [m[1], m[2]]));
let lastEasing;
let animations = 0, observers = 0, focus = false;
class TestNode { constructor(insideHeader = false) { this.insideHeader = insideHeader; } }
const events = {}, attributes = { 'aria-expanded': 'false' };
const toggle = {
  setAttribute: (key, value) => { attributes[key] = value; },
  getAttribute: key => attributes[key],
  addEventListener: (key, handler) => { events[`toggle:${key}`] = handler; },
  focus: () => { focus = true; },
};
const menu = {
  hidden: true, inert: true,
  style: {},
  getBoundingClientRect: () => ({ top: 110 }),
  animate: (_frames, options) => { animations++; lastEasing = options.easing; return { cancel() {} }; },
  querySelectorAll: () => [],
};
const reduced = { matches: true, addEventListener() {} };
const context = {
  Node: TestNode,
  getComputedStyle: () => ({ getPropertyValue: key => motionTokens[key] || '' }),
  window: { innerHeight: 480, addEventListener: (key, handler) => { events[`window:${key}`] = handler; }, matchMedia: query => query.includes('reduced-motion') ? reduced : { matches: false, addEventListener() {} } },
  document: {
    querySelector: selector => selector === '#menu-toggle' ? toggle : selector === '#mobile-navigation' ? menu : selector === '.site-header' ? { contains: target => target.insideHeader } : null,
    querySelectorAll: () => [{ classList: { add() { throw Error('Unexpected reveal'); } } }],
    addEventListener: (key, handler) => { events[`document:${key}`] = handler; },
  },
  IntersectionObserver: class { constructor() { observers++; } },
};
runInNewContext(header, context);
events['toggle:click']();
assert.equal(attributes['aria-expanded'], 'true');
assert.equal(menu.hidden, false);
assert.equal(menu.inert, false);
events['document:keydown']({ key: 'Escape' });
assert.equal(attributes['aria-expanded'], 'false');
assert.equal(menu.hidden, true);
assert.equal(menu.inert, true);
assert.equal(focus, true);
assert.equal(animations, 0);
assert.equal(menu.style.maxHeight, '358px');
// A keyboard user leaving the disclosure keeps the new focus and sees the page.
focus = false;
events['toggle:click']();
events['document:focusin']({ target: new TestNode(true) });
assert.equal(menu.hidden, false);
events['document:focusin']({ target: new TestNode() });
assert.equal(menu.hidden, true);
assert.equal(menu.inert, true);
assert.equal(focus, false);
const reducedAnimations = animations;
// The same regression must close immediately even when normal motion is enabled.
reduced.matches = false;
events['toggle:click']();
context.window.innerHeight = 360;
events['window:resize']();
assert.equal(menu.style.maxHeight, '238px');
events['document:focusin']({ target: new TestNode() });
assert.equal(menu.hidden, true);
assert.equal(attributes['aria-expanded'], 'false');
assert.equal(animations, 1);
assert.equal(lastEasing, motionTokens['--motion-enter']);
assert.equal(focus, false);
reduced.matches = true;
// A separate context mirrors a separate module scope.
runInNewContext(reveal, { ...context, window: { ...context.window, IntersectionObserver: context.IntersectionObserver } });
assert.equal(observers, 0);
const css = await readFile('src/styles/motion.css', 'utf8');
assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
assert.match(css, /@view-transition\s*\{\s*navigation:\s*none/);
assert.match(css, /animation:\s*none\s*!important/);
console.log(JSON.stringify({ passed: true, reducedMotion: { menuAnimations: reducedAnimations, revealObservers: observers, escapeReturnsFocus: true, instantClose: menu.hidden, cssRulesReviewed: true }, keyboard: { leavingMenuClosesImmediately: true, outsideFocusPreserved: true, viewportHeightRespected: true }, scope: 'Actual component scripts in a controlled JS context; CSS rules inspected. OS preference and browser rendering not emulated.' }, null, 2));
