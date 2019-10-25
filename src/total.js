import fetch from 'node-fetch';
import { parse } from 'node-html-parser';

export default async function getTotal() {
  const res = await fetch('https://teamtrees.org');
  const html = await res.text();
  const root = parse(html);
  const totalTrees = root.querySelector('#totalTrees');
  return totalTrees.attributes['data-count'];
}
