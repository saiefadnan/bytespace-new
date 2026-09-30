const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/404 Not Found.svg', 'utf8');
console.log('404 SVG size:', svg.length);

const vb = svg.match(/viewBox="([^"]+)"/);
console.log('viewBox:', vb ? vb[1] : 'none');

// Find all rects
const rRegex = /<rect[^>]*>/g;
let m;
while ((m = rRegex.exec(svg)) !== null) {
  console.log('Rect:', m[0]);
}

// Find linearGradient
const gRegex = /<linearGradient[\s\S]*?<\/linearGradient>/g;
while ((m = gRegex.exec(svg)) !== null) {
  console.log('Gradient:', m[0]);
}

// Find texts
const tRegex = /<text[^>]*>([\s\S]*?)<\/text>/g;
while ((m = tRegex.exec(svg)) !== null) {
  console.log('Text:', m[0]);
}
