const fs = require('fs');

const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');
const startIdx = content.indexOf('<rect x="120.5" y="1768.5" width="372" height="383"');
const nextIdx = content.indexOf('<rect x="533.5" y="1768.5" width="372" height="383"');
const cardChunk = content.slice(startIdx, nextIdx);

// Find all paths and their fill colors
const pathMatches = cardChunk.match(/<path[^>]+fill="([^"]+)"[^>]*>/g);
console.log('Path count:', pathMatches.length);

// Also look at any text elements if any, or let's inspect the patterns
const patternMatches = cardChunk.match(/pattern\d+_\d+_\d+/g);
console.log('Patterns used in card 1:', Array.from(new Set(patternMatches)));

// Let's find definitions of these patterns in Home.svg
patternMatches.forEach(p => {
  const pIdx = content.indexOf(`id="${p}"`);
  if (pIdx !== -1) {
    console.log(content.slice(pIdx, pIdx + 200));
  }
});
