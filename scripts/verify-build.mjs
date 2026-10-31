import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = path.resolve('dist');
const base = '/jaime-valiente-web-demo/';
const expected = ['', 'particulares/', 'empresas/', 'reclamaciones/', 'el-despacho/', 'contacto/', 'area-clientes/', 'aviso-legal/', 'privacidad/', 'cookies/'];
const files = [];
async function walk(dir) { for (const item of await readdir(dir, {withFileTypes:true})) { const file=path.join(dir,item.name); if(item.isDirectory()) await walk(file); else files.push(file); } }
await walk(root);
for (const route of expected) assert.ok(files.includes(path.join(root,route,'index.html')),`Missing route ${route}`);
assert.ok(files.includes(path.join(root,'404.html')),'Missing 404.html');
let references=0, icons=0;
for (const file of files.filter(f=>f.endsWith('.html'))) {
 const html=await readFile(file,'utf8');
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`Exactly one H1 in ${file}`);
 assert.match(html,/<html[^>]+lang="es"/,`Spanish language ${file}`);
 assert.match(html,/<meta name="robots" content="noindex, follow"/,`Demo noindex ${file}`);
 assert.doesNotMatch(html,/<(?:form|input|textarea)(?:\s|>)/i,`No data collection ${file}`);
 assert.doesNotMatch(html,/script\.google\.com|AKfycb|GTM-|G-[A-Z0-9]{7,}/,`No Apps Script or analytics ${file}`);
 assert.match(html,/Demo de diseño/,`Demo label ${file}`);
 for(const match of html.matchAll(/<svg\b[^>]*>/g)) {
  icons++;
  assert.match(match[0], /aria-hidden="true"/, `Decorative icon excluded from accessibility tree in ${file}`);
  assert.match(match[0], /focusable="false"/, `Decorative SVG must not receive focus in ${file}`);
  assert.match(match[0], /viewBox="0 0 256 256"/, `Consistent Phosphor geometry in ${file}`);
  assert.match(match[0], /data-icon="[a-z-]+"/, `Named local icon in ${file}`);
 }
 const fontPreloads=[...html.matchAll(/<link\b[^>]*rel="preload"[^>]*>/g)].map(match=>match[0]).filter(tag=>tag.includes('as="font"'));
 assert.equal(fontPreloads.length,2,`Two critical font preloads in ${file}`);
 for(const tag of fontPreloads) assert.match(tag,/type="font\/woff2"[^>]*crossorigin="anonymous"/,`Font format and credentials mode in ${file}`);
 for(const match of html.matchAll(/(?:href|src)="([^"\s]+)"/g)) {
  const target=match[1];
  if(target.startsWith('#')) {
   references++;
   assert.ok(html.includes(`id="${target.slice(1)}"`),`Missing same-document target ${target} in ${file}`);
   continue;
  }
  if (/^(https?:|mailto:|tel:|data:)/.test(target)) continue;
  references++;
  assert.ok(target.startsWith(base),`Missing GitHub Pages base: ${target} in ${file}`);
  const clean=decodeURIComponent(target.slice(base.length).split(/[?#]/)[0]);
  let dest=path.resolve(root,clean);
  assert.ok(dest.startsWith(root),`Path outside output ${target}`);
  try { if((await stat(dest)).isDirectory())dest=path.join(dest,'index.html'); await stat(dest); }
  catch { throw Error(`Broken local reference ${target} in ${file}`); }
  if(target.includes('#')) {
   const fragment=target.split('#')[1];
   if(fragment && dest.endsWith('.html')) assert.ok((await readFile(dest,'utf8')).includes(`id="${fragment}"`),`Missing anchor ${target}`);
  }
 }
}
const sizes={html:0,css:0,js:0,fonts:0};
const favicon=await readFile(path.join(root,'favicon.svg'),'utf8');
assert.match(favicon, /Source Serif 4/,'Favicon follows the brand typeface');
assert.match(favicon, /<path\b/,'Favicon letter is outlined');
assert.doesNotMatch(favicon, /<text\b|font-family|<script\b|<image\b|(?:xlink:)?href=/i,'Favicon has no font or external dependency');
for (const file of ['favicon.ico','favicon-32.png','apple-touch-icon.png']) assert.ok((await stat(path.join(root,file))).size>0,`Missing favicon fallback: ${file}`);
const iconLicense=await readFile(path.join(root,'licenses/phosphor-icons.txt'),'utf8');
assert.match(iconLicense,/MIT License/);
assert.match(iconLicense,/Copyright.*Phosphor Icons/);
const motionLicense=await readFile(path.join(root,'licenses/open-props.txt'),'utf8');
assert.match(motionLicense,/MIT License/);
assert.match(motionLicense,/Adam Argyle/);
for(const file of files){ const size=(await stat(file)).size; if(file.endsWith('.html'))sizes.html+=size; if(file.endsWith('.css'))sizes.css+=size; if(file.endsWith('.js'))sizes.js+=size; if(file.endsWith('.woff2'))sizes.fonts+=size; }
console.log(JSON.stringify({status:'passed',pages:expected.length+1,localReferencesChecked:references,decorativeIconsChecked:icons,iconLicenseIncluded:true,bytesUncompressed:sizes},null,2));
