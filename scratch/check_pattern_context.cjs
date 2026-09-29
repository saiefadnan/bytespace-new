const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const idx = svg.indexOf('x="424" y="3978"');
if (idx !== -1) {
  console.log(svg.substring(idx - 400, idx + 600));
} else {
  console.log('Not found');
}
