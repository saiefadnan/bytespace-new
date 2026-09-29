const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

function extractImage(imgId, filename) {
  const idx = svg.indexOf('id="' + imgId + '"');
  if (idx === -1) {
    console.log('Not found:', imgId);
    return;
  }
  const match = svg.substring(idx).match(/xlink:href="data:image\/png;base64,([^"]+)"/);
  if (match) {
    const buf = Buffer.from(match[1], 'base64');
    fs.writeFileSync('src/assets/images/' + filename, buf);
    console.log(`Saved ${filename} (${buf.length} bytes)`);
  }
}

extractImage('image8_1_1067', 'figma-hero-doodle-spring-right.png');
extractImage('image9_1_1067', 'figma-hero-doodle-zigzag-left.png');
extractImage('image10_1_1067', 'figma-hero-doodle-torus-left.png');
extractImage('image11_1_1067', 'figma-hero-doodle-cylinder-right.png');
extractImage('image12_1_1067', 'figma-hero-doodle-pyramid-right.png');
