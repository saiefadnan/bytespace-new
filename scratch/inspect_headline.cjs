const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find all paths in y=3800-4500 with fill color and check what their bbox or coordinates are
// Specifically looking for the text "Create & Manage Courses Easily."
// The first letter 'C' in 'Create' started at M757.852 3978.63!
console.log('--- Checking path around 757.852 3978.63 ---');
const idx = svg.indexOf('757.852 3978.63');
console.log(svg.substring(idx - 100, idx + 1500));
