const fs = require('fs');

const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find the index of the first rect
const startIdx = content.indexOf('<rect x="120.5" y="1768.5" width="372" height="383"');
console.log('startIdx:', startIdx);

// Let's print out roughly 6000 characters from startIdx
const chunk = content.slice(startIdx, startIdx + 12000);
console.log('--- CHUNK ---');
console.log(chunk.slice(0, 4000));
