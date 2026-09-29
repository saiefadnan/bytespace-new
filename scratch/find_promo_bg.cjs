const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find the section rect in y=4500..4600
const regex = /<rect[^>]*>/g;
let m;
while ((m = regex.exec(svg)) !== null) {
  const str = m[0];
  if (str.includes('4580') || str.includes('4585') || (str.includes('1440') && str.includes('fill="#003BE2"'))) {
    console.log(str);
  }
}
