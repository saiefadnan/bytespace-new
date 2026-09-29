const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const idx = svg.indexOf('x="149" y="3864"');
console.log(svg.substring(idx - 300, idx + 300));
