import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

const workspace = process.cwd();
const quality = path.resolve('.quality');
const fixture = path.join(quality, 'site');
assert.equal(path.dirname(quality), workspace, 'Quality artifacts must stay in the workspace');
assert.equal(path.dirname(fixture), quality, 'Only the isolated quality fixture may be replaced');
await rm(fixture, { recursive: true, force: true });
await mkdir(fixture, { recursive: true });
await cp(path.resolve('dist'), fixture, { recursive: true });
await rm(path.join(quality, 'axe.json'), { force: true });
console.log('Isolated quality fixture ready');
