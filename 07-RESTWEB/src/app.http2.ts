import http2 from 'http2';
import fs from 'fs';

const options = {
  key: fs.readFileSync('./keys/server.key'),
  cert: fs.readFileSync('./keys/server.crt'),
}

const server = http2.createSecureServer(options, (req, res) => {
  console.log(req.url);

  if(req.url?.endsWith('.js')){
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
  } else if(req.url?.endsWith('.css')){
    res.writeHead(200, { 'Content-Type': 'text/css' });
  }

  if( req.url === '/person'){
    const data = { name: 'John Doe', age: 20, city: 'New York' };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
    return;
  }

  // SSR
  if(req.url === '/'){
    const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlFile);
    return;
  }

  try{
    const responseContent = fs.readFileSync(`./public${req.url}`, 'utf-8');
    res.end(responseContent);
  }catch(error){
    res.writeHead(404, { 'Content-Type': 'text/html'});
    res.end();
  }
    
  
});

server.listen(8080, () => {
  console.log('Server running on PORT: 8080');
});
// console.log(http.STATUS_CODES);