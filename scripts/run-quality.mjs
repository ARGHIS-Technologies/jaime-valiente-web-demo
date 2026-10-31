import { spawnSync } from 'node:child_process';
import './prepare-quality.mjs';

if (process.argv.includes('--accessibility')) process.env.QUALITY_AXE_ONLY = '1';

function run(file, args = []) {
  return spawnSync(process.execPath, [file, ...args], { stdio: 'inherit', env: process.env }).status ?? 1;
}
const collect = run('node_modules/@lhci/cli/src/cli.js', ['collect']);
if (collect) {
  process.exitCode = collect;
} else {
  const summary = run('scripts/summarize-quality.mjs');
  const assertions = run('node_modules/@lhci/cli/src/cli.js', ['assert']);
  process.exitCode = summary || assertions;
}
