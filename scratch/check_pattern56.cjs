const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const m56 = svg.match(/<pattern id="pattern56_1_1067"[\s\S]*?<\/pattern>/);
const m57 = svg.match(/<pattern id="pattern57_1_1067"[\s\S]*?<\/pattern>/);
console.log('pattern56:', m56 ? m56[0] : 'not found');
console.log('pattern57:', m57 ? m57[0] : 'not found');
