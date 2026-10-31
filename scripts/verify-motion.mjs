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
let animations = 0, observers = 0, focus = false;
const events = {}, attributes = { 'aria-expanded': 'false' };
const toggle = {
  setAttribute: (key, value) => { attributes[key] = value; },
  getAttribute: key => attributes[key],
  addEventListener: (key, handler) => { events[`toggle:${key}`] = handler; },
  focus: () => { focus = true; },
};
const menu = {
  hidden: true, inert: true,
  animate: () => { animations++; return { cancel() {} }; },
  querySelectorAll: () => [],
};
const reduced = { matches: true, addEventListener() {} };
const context = {
  window: { matchMedia: query => query.includes('reduced-motion') ? reduced : { matches: false, addEventListener() {} } },
  document: {
    querySelector: selector => selector === '#menu-toggle' ? toggle : selector === '#mobile-navigation' ? menu : null,
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
// A separate context mirrors a separate module scope.
runInNewContext(reveal, { ...context, window: { ...context.window, IntersectionObserver: context.IntersectionObserver } });
assert.equal(observers, 0);
const css = await readFile('src/styles/motion.css', 'utf8');
assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
assert.match(css, /@view-transition\s*\{\s*navigation:\s*none/);
assert.match(css, /animation:\s*none\s*!important/);
console.log(JSON.stringify({ passed: true, reducedMotion: { menuAnimations: animations, revealObservers: observers, escapeReturnsFocus: focus, instantClose: menu.hidden, cssRulesReviewed: true }, scope: 'Actual component scripts in a controlled JS context; CSS rules inspected. OS preference and browser rendering not emulated.' }, null, 2));
