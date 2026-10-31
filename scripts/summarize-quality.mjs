import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const median = xs => [...xs].sort((a, b) => a - b)[Math.floor(xs.length / 2)];
const reports = [];
for (const file of await readdir('.lighthouseci')) {
  if (!file.endsWith('.json')) continue;
  const report = JSON.parse(await readFile(path.join('.lighthouseci', file), 'utf8'));
  if (report.lighthouseVersion && report.categories) reports.push(report);
}
if (!reports.length) throw Error('Lighthouse did not produce measurements');
const grouped = new Map();
for (const r of reports) {
  const route = new URL(r.finalDisplayedUrl || r.finalUrl).pathname;
  if (!grouped.has(route)) grouped.set(route, []);
  grouped.get(route).push(r);
}
const lighthouse = [...grouped].map(([route, rs]) => ({
  route, runs: rs.length, lighthouseVersion: rs[0].lighthouseVersion,
  scores: Object.fromEntries(Object.keys(rs[0].categories).map(k => [k, median(rs.map(r => r.categories[k].score))])),
  metrics: Object.fromEntries(['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index'].map(k => [k, median(rs.map(r => r.audits[k].numericValue))])),
  findings: rs[0].categories ? Object.values(rs[0].audits).filter(a => a.score !== null && a.score < 1).map(a => ({ id: a.id, title: a.title, score: a.score, displayValue: a.displayValue })) : [],
}));
const axe = JSON.parse(await readFile('.quality/axe.json', 'utf8'));
const violations = axe.results.flatMap(r => r.violations.map(v => ({ route: r.route, width: r.width, state: r.state, ...v })));
const incomplete = axe.results.flatMap(r => r.incomplete.map(v => ({ route: r.route, width: r.width, state: r.state, ...v })));
// This exact overlap was visually reviewed: the opaque menu covers the underlying hero.
// Keep the evidence; any new incomplete result must stop publication for review.
const reviewedOverlap = r => r.route === '' && r.width === 390 && r.state === 'menu-open' && r.id === 'color-contrast'
  && r.nodes.every(n => n.failureSummary?.includes('overlapped by another element'));
const unexpectedIncomplete = incomplete.filter(r => !reviewedOverlap(r));
const summary = { generatedAt: new Date().toISOString(), environment: 'Isolated local static build; simulated mobile Lighthouse; no field data', lighthouse, axe: { engine: axe.engine, states: axe.results.length, violations, incompleteCount: incomplete.length, reviewedMenuOverlap: incomplete.filter(reviewedOverlap).length, unexpectedIncomplete } };
await writeFile('.quality/summary.json', JSON.stringify(summary, null, 2));
console.log(JSON.stringify({
  lighthouse: lighthouse.map(({ route, runs, scores, metrics }) => ({ route, runs, scores, metrics })),
  axe: { states: axe.results.length, violations: violations.length, ruleIds: [...new Set(violations.map(v => v.id))], incompleteCount: summary.axe.incompleteCount, unexpectedIncomplete: unexpectedIncomplete.length },
}, null, 2));
if (violations.length || unexpectedIncomplete.length) process.exitCode = 1;
