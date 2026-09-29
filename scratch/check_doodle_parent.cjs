const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find all tags around x="424" y="3978"
const idx = svg.indexOf('x="424" y="3978"');
console.log(svg.substring(idx - 600, idx + 600));
