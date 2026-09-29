const fs = require('fs');

const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');
const startIdx = content.indexOf('<rect x="120.5" y="1768.5" width="372" height="383"');
const nextIdx = content.indexOf('<rect x="533.5" y="1768.5" width="372" height="383"');

const cardChunk = content.slice(startIdx, nextIdx);
console.log('Card chunk length:', cardChunk.length);

// Extract all rects in this card
const rects = cardChunk.match(/<rect[^>]+>/g);
console.log('Rects in card:', rects);

// Extract all circles
const circles = cardChunk.match(/<circle[^>]+>/g);
console.log('Circles in card:', circles);

// Extract all fills
const fills = Array.from(new Set(cardChunk.match(/fill="[^"]+"/g)));
console.log('Fills in card:', fills);

// Extract all strokes
const strokes = Array.from(new Set(cardChunk.match(/stroke="[^"]+"/g)));
console.log('Strokes in card:', strokes);
