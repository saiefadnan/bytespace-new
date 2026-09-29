const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const regex = /<[^>]*>/g;
let m;
const showcase1 = [];
while ((m = regex.exec(svg)) !== null) {
  const str = m[0];
  const nums = str.match(/[0-9.]+/g) || [];
  const inRange = nums.some(n => {
    const v = parseFloat(n);
    return v >= 3100 && v < 3864;
  });
  if (inRange && (str.startsWith('<rect') || str.startsWith('<circle') || str.startsWith('<path') || str.startsWith('<g') || str.startsWith('<use') || str.startsWith('<foreignObject'))) {
    showcase1.push(str.substring(0, 160));
  }
}

showcase1.slice(35).forEach((e, i) => console.log(`${i + 35}: ${e}`));
