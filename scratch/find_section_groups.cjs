const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find all paths or elements with x > 700 and y between 3800 and 4500
// Check if there are groups or clips
const pathRegex = /<path[^>]*d="([^"]*)"[^>]*>/g;
let m;
let count = 0;
const xCoords = [];
// Let's find groups with transform
const gRegex = /<g[^>]*transform="([^"]*)"[^>]*>/g;
while ((m = gRegex.exec(svg)) !== null) {
  if (m[1].includes('38') || m[1].includes('39') || m[1].includes('40') || m[1].includes('41') || m[1].includes('42') || m[1].includes('43')) {
    console.log('Group transform:', m[0]);
  }
}
