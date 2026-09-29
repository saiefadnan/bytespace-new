const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// List patterns 0 to 19 and their images
for (let i = 0; i <= 19; i++) {
  const patRegex = new RegExp('<pattern id="pattern' + i + '_1_1067"[\\s\\S]*?<\\/pattern>');
  const m = svg.match(patRegex);
  if (m) {
    console.log(`pattern${i}:`, m[0]);
  }
}
