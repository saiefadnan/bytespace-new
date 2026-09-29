const fs = require('fs');

const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const coords = [
  { x: '120.5', y: '1768.5' },
  { x: '533.5', y: '1768.5' },
  { x: '946.5', y: '1768.5' },
  { x: '120.5', y: '2192.5' },
  { x: '533.5', y: '2192.5' },
  { x: '946.5', y: '2192.5' }
];

// Let's decode or inspect the image pattern used in each card
coords.forEach((c, idx) => {
  const marker = `<rect x="${c.x}" y="${c.y}" width="372" height="383"`;
  const pos = content.indexOf(marker);
  const nextPos = pos + 40000;
  const chunk = content.slice(pos, nextPos);
  
  // Find pattern id
  const patMatch = chunk.match(/fill="url\(#(pattern\d+_\d+_\d+)\)"/);
  console.log(`\n=== Card ${idx} (${c.x}, ${c.y}) ===`);
  if (patMatch) {
    const patId = patMatch[1];
    const patDef = content.indexOf(`id="${patId}"`);
    console.log('Pattern def:', content.slice(patDef, patDef + 150));
  }
});
