const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find all paths in y: 4050 - 4210, x > 740
const pathRegex = /<path[^>]*d="([^"]*)"[^>]*fill="([^"]*)"[^>]*>/g;
let m;
const colors = new Set();
while ((m = pathRegex.exec(svg)) !== null) {
  const d = m[1];
  const fill = m[2];
  const match = d.match(/M([0-9.]+)\s+([0-9.]+)/);
  if (match) {
    const x = parseFloat(match[1]);
    const y = parseFloat(match[2]);
    if (x >= 740 && x <= 1300 && y >= 4050 && y <= 4210) {
      colors.add(fill);
    }
  }
}
console.log('Paragraph colors:', [...colors]);
