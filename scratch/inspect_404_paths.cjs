const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/404 Not Found.svg', 'utf8');

// Find the path using paint0_linear_63_252
const m = svg.match(/<path[^>]*fill="url\(#paint0_linear_63_252\)"[^>]*>/);
console.log('404 Path:', m ? m[0].slice(0, 300) : 'none');

// Find all paths filled with white in the 404 area
const pMatches = svg.matchAll(/<path[^>]*d="([^"]+)"[^>]*fill="([^"]+)"[^>]*>/g);
for (const pm of pMatches) {
  if (pm[2] === 'white' && pm[1].length < 2000) {
    // console.log('Path:', pm[0]);
  }
}
