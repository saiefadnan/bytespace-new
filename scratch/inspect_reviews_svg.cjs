const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Course Reviews.svg', 'utf8');

// Find all rects
const rRegex = /<rect[^>]*>/g;
let m;
while ((m = rRegex.exec(svg)) !== null) {
  const r = m[0];
  const x = r.match(/x="([^"]+)"/)?.[1];
  const y = r.match(/y="([^"]+)"/)?.[1];
  const w = r.match(/width="([^"]+)"/)?.[1];
  const h = r.match(/height="([^"]+)"/)?.[1];
  const fill = r.match(/fill="([^"]+)"/)?.[1];
  if (parseFloat(y) > 1000 && parseFloat(y) < 2200) {
    console.log(`Rect in Reviews: x=${x} y=${y} w=${w} h=${h} fill=${fill}`);
  }
}
