const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Search for 'Create & Manage' or 'Happy Students' or 'Total Revenue'
const phrases = ['Create &', 'Manage Courses', 'Happy Students', 'Total Revenue', 'Year to Date', 'Monetize Your Passion'];

for (const p of phrases) {
  const idx = svg.indexOf(p);
  if (idx !== -1) {
    console.log(`Found "${p}" at ${idx}:`);
    console.log(svg.substring(Math.max(0, idx - 200), Math.min(svg.length, idx + 300)));
    console.log('---------------------------------');
  } else {
    console.log(`Not found: "${p}"`);
  }
}
