const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find paths near y=4210 to 4360 with x around 770
// Specifically, let's find the text next to the checkmarks
const pathRegex = /<path[^>]*d="([^"]*)"[^>]*fill="([^"]*)"[^>]*>/g;
let m;
while ((m = pathRegex.exec(svg)) !== null) {
  const d = m[1];
  const fill = m[2];
  // check if any point in d is near x=770-1100, y=4210-4360
  const match = d.match(/M([0-9.]+)\s+([0-9.]+)/);
  if (match) {
    const x = parseFloat(match[1]);
    const y = parseFloat(match[2]);
    if (x >= 765 && x <= 800 && y >= 4210 && y <= 4360) {
      console.log(`Text item at x=${x}, y=${y}, fill=${fill}`);
    }
  }
}
