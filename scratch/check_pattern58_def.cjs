const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const m = svg.match(/<pattern id="pattern58_1_1067"[\s\S]*?<\/pattern>/);
console.log(m ? m[0] : 'pattern58 not found');
