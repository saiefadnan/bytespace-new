const fs = require('fs');

const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find paths around y=1400 to 1510
const re = /<path[^>]+d="[^"]*M\s*([\d\.-]+)\s+([\d\.-]+)[^"]*"[^>]+fill="([^"]+)"/g;
let m;
const subtextFills = [];
while ((m = re.exec(content)) !== null) {
  const x = parseFloat(m[1]);
  const y = parseFloat(m[2]);
  if (y >= 1420 && y <= 1510) {
    subtextFills.push({ x, y, fill: m[3] });
  }
}
console.log('Subtext fills:', Array.from(new Set(subtextFills.map(h => h.fill))));
