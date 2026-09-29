const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find image22_1_1067 in Home.svg
const idx = svg.indexOf('id="image22_1_1067"');
console.log('image22 tag:', svg.substring(idx, idx + 100));

// Check size and resolution of figma-creator-pattern58_1_1067.png
const buf = fs.readFileSync('src/assets/images/figma-creator-pattern58_1_1067.png');
console.log('PNG size on disk:', buf.length);
// Read width and height from PNG header (bytes 16-24)
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
console.log(`PNG dimensions: ${width}x${height}`);
