const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const idx = svg.indexOf('x="404" y="4277"');
console.log(svg.substring(idx + 4000, idx + 6000));
