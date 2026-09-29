const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find all <text> elements with y between 3800 and 4600
const textRegex = /<text[^>]*>([\s\S]*?)<\/text>/g;
let m;
while ((m = textRegex.exec(svg)) !== null) {
  const full = m[0];
  const yMatch = full.match(/y="([0-9.]+)"/);
  if (yMatch) {
    const y = parseFloat(yMatch[1]);
    if (y >= 3800 && y <= 4550) {
      console.log(full);
    }
  }
}
