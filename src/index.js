import http from 'http';
import getTotal from './total';

let total = 0;
setInterval(async () => {
  total = await getTotal();
}, 3000);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' });
  res.end(total);
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

export default server;
