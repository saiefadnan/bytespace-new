const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const m3 = svg.match(/<radialGradient id="paint3_radial_1_1067"[\s\S]*?<\/radialGradient>/);
console.log('paint3_radial:', m3 ? m3[0] : 'not found');
