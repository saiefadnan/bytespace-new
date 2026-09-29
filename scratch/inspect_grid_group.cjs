const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Course Details.svg', 'utf8');

const pos = svg.indexOf('line x1="121"');
console.log(svg.slice(pos - 200, pos + 200));
