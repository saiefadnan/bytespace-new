const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Course Details.svg', 'utf8');

const lRegex = /<line[^>]*>/g;
let m;
while ((m = lRegex.exec(svg)) !== null) {
  console.log(m[0]);
}
