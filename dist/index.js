"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("http"));

var _total = _interopRequireDefault(require("./total"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let total = 0;
setInterval(async () => {
  total = await (0, _total.default)();
}, 3000);

const server = _http.default.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(total);
}).listen(80, '127.0.0.1');

console.log('Server running at http://127.0.0.1:80/');
var _default = server;
exports.default = _default;