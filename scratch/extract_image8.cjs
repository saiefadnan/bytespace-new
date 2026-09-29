const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const idx = svg.indexOf('id="image8_1_1067"');
const base64Match = svg.substring(idx).match(/xlink:href="data:image\/png;base64,([^"]+)"/);
const imgBuf = Buffer.from(base64Match[1], 'base64');
console.log('image8 extracted size:', imgBuf.length);

fs.writeFileSync('src/assets/images/figma-showcase1-doodle.png', imgBuf);
console.log('Saved to src/assets/images/figma-showcase1-doodle.png');
