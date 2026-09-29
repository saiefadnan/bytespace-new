const fs = require('fs');

const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// The courses section starts around y=1400 to 1750
// Let's find rects between y=1450 and 1750
const re = /<rect[^>]+y="(\d+(?:\.\d+)?)"[^>]*>/g;
let m;
const pills = [];
while ((m = re.exec(content)) !== null) {
  const y = parseFloat(m[1]);
  if (y >= 1400 && y <= 1760) {
    pills.push(m[0]);
  }
}
console.log('Pills count between 1400 and 1760:', pills.length);
pills.forEach(p => console.log(p));
