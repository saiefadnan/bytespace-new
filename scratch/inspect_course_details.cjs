const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Course Details.svg', 'utf8');

const foRegex = /<foreignObject[\s\S]*?<\/foreignObject>/g;
let m;
while ((m = foRegex.exec(svg)) !== null) {
  console.log('--- ForeignObject ---');
  console.log(m[0].slice(0, 500));
}
