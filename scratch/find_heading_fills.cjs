const fs = require('fs');

const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find paths around y=1300 to 1480
const re = /<path[^>]+d="[^"]*M\s*([\d\.-]+)\s+([\d\.-]+)[^"]*"[^>]+fill="([^"]+)"/g;
let m;
const headingFills = [];
while ((m = re.exec(content)) !== null) {
  const x = parseFloat(m[1]);
  const y = parseFloat(m[2]);
  if (y >= 1300 && y <= 1450) {
    headingFills.push({ x, y, fill: m[3] });
  }
}
console.log('Heading fills count:', headingFills.length);
console.log(Array.from(new Set(headingFills.map(h => h.fill))));
