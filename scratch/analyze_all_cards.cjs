const fs = require('fs');

const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// The 6 cards in the grid are:
// (120.5, 1768.5), (533.5, 1768.5), (946.5, 1768.5)
// (120.5, 2192.5), (533.5, 2192.5), (946.5, 2192.5)

const coords = [
  { x: '120.5', y: '1768.5' },
  { x: '533.5', y: '1768.5' },
  { x: '946.5', y: '1768.5' },
  { x: '120.5', y: '2192.5' },
  { x: '533.5', y: '2192.5' },
  { x: '946.5', y: '2192.5' },
  { x: '758.5', y: '3240.5' }
];

coords.forEach((c, idx) => {
  const marker = `<rect x="${c.x}" y="${c.y}" width="372" height="383"`;
  const pos = content.indexOf(marker);
  console.log(`Card ${idx} (${c.x}, ${c.y}): found at ${pos}`);
  if (pos !== -1) {
    const chunk = content.slice(pos, pos + 25000);
    // Find pattern for main image
    const imgPattern = chunk.match(/fill="url\(#(pattern\d+_\d+_\d+)\)"/);
    // Find rects
    const pills = chunk.match(/<rect[^>]+fill="#F6F6F6"[^>]*>/g);
    console.log(`  imgPattern:`, imgPattern ? imgPattern[1] : 'none');
    console.log(`  pills count:`, pills ? pills.length : 0);
  }
});
