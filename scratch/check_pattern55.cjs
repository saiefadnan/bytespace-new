const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const m = svg.match(/<pattern id="pattern55_1_1067"[\s\S]*?<\/pattern>/);
console.log('pattern55:', m ? m[0] : 'not found');
