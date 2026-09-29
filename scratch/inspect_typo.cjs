const fs = require('fs');

const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const coords = [
  { x: '120.5', y: '1768.5', label: 'Card 0' },
  { x: '533.5', y: '1768.5', label: 'Card 1' },
  { x: '946.5', y: '1768.5', label: 'Card 2' },
  { x: '120.5', y: '2192.5', label: 'Card 3' },
  { x: '533.5', y: '2192.5', label: 'Card 4' },
  { x: '946.5', y: '2192.5', label: 'Card 5' }
];

// Let's find texts around these coordinates
// In Home.svg, paths have d="..."
// But wait, can we check if Typhography.svg or other files have full strings?
// Let's inspect Typhography.svg
const typo = fs.readFileSync('src/assets/figma/Typhography.svg', 'utf8');
console.log('Typhography.svg size:', typo.length);
const typoStrings = typo.match(/<text[^>]*>([^<]+)<\/text>/g);
console.log('Typo texts:', typoStrings);
