const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const pathRegex = /<path[^>]*d="([^"]*)"[^>]*fill="([^"]*)"[^>]*>/g;
let m;
while ((m = pathRegex.exec(svg)) !== null) {
  const d = m[1];
  const fill = m[2];
  const match = d.match(/M([0-9.]+)\s+([0-9.]+)/);
  if (match) {
    const x = parseFloat(match[1]);
    const y = parseFloat(match[2]);
    if (x >= 740 && x <= 780 && y >= 4050 && y <= 4210) {
      console.log(`Paragraph item at x=${x}, y=${y}, fill=${fill}`);
    }
  }
}
