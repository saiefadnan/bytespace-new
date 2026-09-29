const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Search for patterns between y=0 and y=1100
const regex = /<rect[^>]*fill="url\(#pattern[0-9]+_1_1067\)"[^>]*>/g;
let m;
while ((m = regex.exec(svg)) !== null) {
  const str = m[0];
  const yMatch = str.match(/y="([0-9.]+)"/);
  if (yMatch && parseFloat(yMatch[1]) < 1200) {
    console.log(str);
  }
}
