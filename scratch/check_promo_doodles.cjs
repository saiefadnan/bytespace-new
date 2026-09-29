const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find all rects with patterns in y=4400..5100
const regex = /<rect[^>]*fill="url\(#pattern[0-9]+_1_1067\)"[^>]*>/g;
let m;
while ((m = regex.exec(svg)) !== null) {
  const str = m[0];
  const nums = str.match(/[0-9.-]+/g) || [];
  const inRange = nums.some(n => {
    const v = parseFloat(n);
    return v >= 4400 && v <= 5100;
  });
  if (inRange) {
    console.log(str);
  }
}
