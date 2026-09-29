const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Course Details.svg', 'utf8');

// Find all rect elements
const rects = [];
const rRegex = /<rect[^>]*>/g;
let m;
while ((m = rRegex.exec(svg)) !== null) {
  rects.push(m[0]);
}
console.log('Total rects:', rects.length);
rects.forEach(r => {
  // Extract x, y, width, height, fill, rx
  const x = r.match(/x="([^"]+)"/)?.[1];
  const y = r.match(/y="([^"]+)"/)?.[1];
  const w = r.match(/width="([^"]+)"/)?.[1];
  const h = r.match(/height="([^"]+)"/)?.[1];
  const rx = r.match(/rx="([^"]+)"/)?.[1];
  const fill = r.match(/fill="([^"]+)"/)?.[1];
  const stroke = r.match(/stroke="([^"]+)"/)?.[1];
  console.log(`Rect: x=${x} y=${y} w=${w} h=${h} rx=${rx} fill=${fill} stroke=${stroke}`);
});
