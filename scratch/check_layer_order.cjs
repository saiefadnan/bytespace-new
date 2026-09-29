const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find the lines between y=3800 and y=4500 and their exact order of appearance in Home.svg!
const regex = /<[^>]*>/g;
let m;
const elements = [];
while ((m = regex.exec(svg)) !== null) {
  const str = m[0];
  if (str.includes('3908') || str.includes('4058') || str.includes('3864') || str.includes('3978') || str.includes('4277')) {
    elements.push(str.substring(0, 100));
  }
}

elements.forEach((e, i) => console.log(`${i}: ${e}`));
