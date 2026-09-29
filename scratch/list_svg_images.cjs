const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find all image definitions in defs
const imgRegex = /<image id="image([0-9_]+)" width="([0-9]+)" height="([0-9]+)"/g;
let m;
while ((m = imgRegex.exec(svg)) !== null) {
  console.log(`Image id=${m[1]}, width=${m[2]}, height=${m[3]}`);
}
