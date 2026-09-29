const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const m = svg.match(/<filter id="filter34_dddddddd_1_1067"[\s\S]*?<\/filter>/);
console.log(m ? m[0] : 'Filter not found');
