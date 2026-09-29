const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const m74 = svg.match(/<pattern id="pattern74_1_1067"[\s\S]*?<\/pattern>/);
console.log('pattern74:', m74 ? m74[0] : 'not found');
