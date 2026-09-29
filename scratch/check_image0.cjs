const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const idx = svg.indexOf('id="image0_1_1067"');
console.log(svg.substring(idx, idx + 100));

// Check files in src/assets/images
const files = fs.readdirSync('src/assets/images');
console.log('Images matching hero/student:', files.filter(f => f.includes('student') || f.includes('hero')));
