import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('dist');
const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.webp':'image/webp','.jpg':'image/jpeg','.svg':'image/svg+xml','.mp4':'video/mp4','.ogg':'audio/ogg','.woff2':'font/woff2'};
// Static server with directory routes: /about/ serves dist/about/index.html, /about redirects to /about/.
http.createServer((req,res)=>{
  const url=decodeURIComponent(req.url.split('?')[0]);
  let p=path.resolve(root,'.'+url);
  if(p!==root&&!p.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
  if(fs.existsSync(p)&&fs.statSync(p).isDirectory()){
    if(!url.endsWith('/')){res.writeHead(301,{Location:url+'/'});return res.end();}
    p=path.join(p,'index.html');
  }
  fs.stat(p,(err,stat)=>{
    if(err||!stat.isFile()){res.writeHead(404,{'Content-Type':'text/html'});return fs.createReadStream(path.join(root,'index.html')).pipe(res);}
    const range=req.headers.range;res.setHeader('Content-Type',mime[path.extname(p)]||'application/octet-stream');res.setHeader('Accept-Ranges','bytes');
    if(range){const [a,b]=range.replace('bytes=','').split('-');const start=Number(a)||0,end=b?Math.min(Number(b),stat.size-1):stat.size-1;if(start>=stat.size||end<start){res.writeHead(416);return res.end();}res.writeHead(206,{'Content-Range':`bytes ${start}-${end}/${stat.size}`,'Content-Length':end-start+1});fs.createReadStream(p,{start,end}).pipe(res);}
    else{res.writeHead(200,{'Content-Length':stat.size});fs.createReadStream(p).pipe(res);}
  });
}).listen(Number(process.env.PORT)||5173,'127.0.0.1',function(){console.log(`ZEL preview: http://localhost:${this.address().port}`);});
