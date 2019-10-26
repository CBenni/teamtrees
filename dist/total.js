"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTotal;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _nodeHtmlParser = require("node-html-parser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getTotal() {
  const res = await (0, _nodeFetch.default)('https://teamtrees.org');
  const html = await res.text();
  const root = (0, _nodeHtmlParser.parse)(html);
  const totalTrees = root.querySelector('#totalTrees');
  return totalTrees.attributes['data-count'];
}