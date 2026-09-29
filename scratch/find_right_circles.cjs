const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find circles on the right side (x > 700, y between 3900 and 4450)
const circleRegex = /<circle[^>]*>/g;
let m;
while ((m = circleRegex.exec(svg)) !== null) {
  const c = m[0];
  const cxMatch = c.match(/cx="([0-9.]+)"/);
  const cyMatch = c.match(/cy="([0-9.]+)"/);
  if (cxMatch && cyMatch) {
    const cx = parseFloat(cxMatch[1]);
    const cy = parseFloat(cyMatch[1]);
    if (cx > 700 && cy > 3900 && cy < 4500) {
      console.log('Circle on right:', c);
    }
  }
}
