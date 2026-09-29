const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find all elements between y=2575 and y=3200
console.log('--- ALL ELEMENTS BETWEEN 2575 and 3200 ---');
const regex = /<[^>]*>/g;
let m;
while ((m = regex.exec(svg)) !== null) {
  const str = m[0];
  const nums = str.match(/[0-9.]+/g) || [];
  const inRange = nums.some(n => {
    const v = parseFloat(n);
    return v >= 2575 && v <= 3100;
  });
  if (inRange && (str.startsWith('<rect') || str.startsWith('<circle') || str.startsWith('<text') || str.startsWith('<path') || str.startsWith('<g'))) {
    console.log(str.substring(0, 150));
  }
}
