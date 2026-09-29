const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Course Details.svg', 'utf8');

// Find where pattern matches are used
const patRegex = /fill="url\(#(pattern\d+_[^)]+)\)"/g;
let m;
while ((m = patRegex.exec(svg)) !== null) {
  const patId = m[1];
  // Find element surrounding this fill
  const start = Math.max(0, m.index - 150);
  const end = Math.min(svg.length, m.index + 100);
  console.log('--- Pattern usage:', patId);
  console.log(svg.slice(start, end).replace(/\s+/g, ' '));
}
