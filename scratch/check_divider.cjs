const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Check for any lines or rects between y=2570 and 2660
const regex = /<[^>]*y="([0-9.]+)"[^>]*>/g;
let m;
while ((m = regex.exec(svg)) !== null) {
  const y = parseFloat(m[1]);
  if (y >= 2570 && y <= 2660) {
    console.log(m[0]);
  }
}
