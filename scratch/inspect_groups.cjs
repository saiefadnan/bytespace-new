const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Course Details.svg', 'utf8');

// Find all elements around y=1400 to 2200
// Check text or paths in this region
const pathMatches = svg.matchAll(/<path[^>]*d="([^"]+)"[^>]*>/g);
console.log('Searching paths...');
// Let's see what groups exist
const gRegex = /<g[^>]*id="([^"]+)"[^>]*>/g;
let m;
while ((m = gRegex.exec(svg)) !== null) {
  console.log('Group id:', m[1]);
}
