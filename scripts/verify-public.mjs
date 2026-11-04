import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

const root=path.resolve('dist');
const site='https://arghis-technologies.github.io/jaime-valiente-web-demo/';
const files=[];
async function walk(dir){for(const item of await readdir(dir,{withFileTypes:true})){const f=path.join(dir,item.name);if(item.isDirectory())await walk(f);else files.push(f);}}
await walk(root);
const results=[];
// Bounded requests to the published demo; no authentication or data submission.
for(let i=0;i<files.length;i+=6){
 const batch=await Promise.all(files.slice(i,i+6).filter(f=>path.basename(f)!=='.nojekyll').map(async file=>{
  const relative=path.relative(root,file).split(path.sep).join('/');
  const route=relative==='index.html'?'':relative.replace(/\/index\.html$/,'/');
  const response=await fetch(new URL(route,site),{signal:AbortSignal.timeout(30000)});
  const actual=Buffer.from(await response.arrayBuffer());
  const expected=await readFile(file);
  const digest=b=>createHash('sha256').update(b).digest('hex');
  return {route,status:response.status,bytes:actual.length,matchesLocalBuild:digest(actual)===digest(expected)};
 }));results.push(...batch);
}
const missing=await fetch(new URL('pagina-inexistente-de-prueba/',site),{signal:AbortSignal.timeout(30000)});
const missingBody=await missing.text();
const notFound={status:missing.status,customPage:missingBody.includes('No encontramos')&&missingBody.includes('Jaime Valiente')};
const report={site,files:results.length,results,notFound,passed:results.every(r=>r.status===200&&r.matchesLocalBuild)&&notFound.status===404&&notFound.customPage};
if(process.argv[2])await writeFile(process.argv[2],JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
if(!report.passed)process.exitCode=1;
