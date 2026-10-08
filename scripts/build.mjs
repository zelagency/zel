import { build } from 'esbuild';
await build({ entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'esm', outfile: 'dist/app.js', target: ['es2022'], legalComments: 'eof' });
console.log('Built ZEL → dist/');
