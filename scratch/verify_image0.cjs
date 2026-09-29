const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const idx = svg.indexOf('id="image0_1_1067"');
const base64Match = svg.substring(idx).match(/xlink:href="data:image\/png;base64,([^"]+)"/);
const imgBuf = Buffer.from(base64Match[1], 'base64');
console.log('image0 extracted size:', imgBuf.length);

const s1 = fs.statSync('src/assets/images/figma-hero-student.png');
const s2 = fs.statSync('src/assets/images/hero-student.png');
console.log('figma-hero-student.png size:', s1.size);
console.log('hero-student.png size:', s2.size);

// If different, let's write it to src/assets/images/figma-hero-student.png
if (s1.size !== imgBuf.length) {
  console.log('Saving authentic image0 to figma-hero-student.png');
  fs.writeFileSync('src/assets/images/figma-hero-student.png', imgBuf);
} else {
  console.log('figma-hero-student.png is already exact match!');
}
