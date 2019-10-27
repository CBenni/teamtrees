import http from 'http';
import getTotal from './total';

const port = process.env.PORT || 3000;
let total = 0;
setInterval(async () => {
  const newTotal = await getTotal();
  if (newTotal) {
    total = newTotal;
  }
}, 3000);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' });
  res.end(total);
}).listen(port);

console.log(`Server running at http://127.0.0.1:${port}/`);

export default server;
