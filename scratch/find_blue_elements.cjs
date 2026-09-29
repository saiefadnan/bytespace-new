const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const regex = /<[^>]*fill="#003BE2"[^>]*>/g;
let m;
while ((m = regex.exec(svg)) !== null) {
  const str = m[0];
  // extract all numbers in str
  const nums = str.match(/[0-9.]+/g) || [];
  const inRange = nums.some(n => {
    const v = parseFloat(n);
    return v >= 3800 && v <= 4500;
  });
  if (inRange) {
    console.log(str.substring(0, 200));
  }
}
