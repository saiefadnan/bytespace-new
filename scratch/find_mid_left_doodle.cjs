const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find any elements in y=350..700, x < 400
const regex = /<[^>]*>/g;
let m;
while ((m = regex.exec(svg)) !== null) {
  const str = m[0];
  const nums = str.match(/[-0-9.]+/g) || [];
  const inRange = nums.some(n => {
    const v = parseFloat(n);
    return v >= 400 && v <= 650;
  });
  if (inRange && (str.includes('pattern') || str.includes('image') || str.includes('xlink:href'))) {
    console.log(str.substring(0, 160));
  }
}
