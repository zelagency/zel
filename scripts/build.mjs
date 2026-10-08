import { build } from 'esbuild';
import { readFileSync,writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
await build({ entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'esm', outfile: 'dist/app.js', target: ['es2022'], legalComments: 'eof' });
let html=readFileSync('dist/index.html','utf8');
for(const asset of ['app.js','style.css','projects.css']){
  const hash=createHash('sha256').update(readFileSync(`dist/${asset}`)).digest('hex').slice(0,12);
  const pattern=new RegExp(`/${asset.replaceAll('.','\\.')}(?:\\?v=[a-f0-9]+)?(?=")`,'g');
  html=html.replace(pattern,`/${asset}?v=${hash}`);
}
writeFileSync('dist/index.html',html);
console.log('Built ZEL → dist/');
