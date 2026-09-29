const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const m70 = svg.match(/<pattern id="pattern70_1_1067"[\s\S]*?<\/pattern>/);
console.log('pattern70:', m70 ? m70[0] : 'not found');
