const fs = require('fs');

const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find all paths with fill="#82868E" around y=1400 to 1510 to get minX and maxX
const re = /<path[^>]+d="([^"]+)"[^>]+fill="#82868E"/g;
let m;
let minX = 9999, maxX = -9999, minY = 9999, maxY = -9999;
while ((m = re.exec(content)) !== null) {
  const d = m[1];
  const coords = d.match(/[\d\.]+/g);
  if (coords) {
    for (let i = 0; i < coords.length; i += 2) {
      const x = parseFloat(coords[i]);
      const y = parseFloat(coords[i+1]);
      if (y >= 1400 && y <= 1510) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
}
console.log(`Subtext bounding box: x=[${minX}, ${maxX}] (width=${maxX - minX}), y=[${minY}, ${maxY}] (height=${maxY - minY})`);

// Do the same for heading
const reHead = /<path[^>]+d="([^"]+)"[^>]+fill="#040819"/g;
minX = 9999; maxX = -9999; minY = 9999; maxY = -9999;
while ((m = reHead.exec(content)) !== null) {
  const d = m[1];
  const coords = d.match(/[\d\.]+/g);
  if (coords) {
    for (let i = 0; i < coords.length; i += 2) {
      const x = parseFloat(coords[i]);
      const y = parseFloat(coords[i+1]);
      if (y >= 1300 && y <= 1450) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
}
console.log(`Heading bounding box: x=[${minX}, ${maxX}] (width=${maxX - minX}), y=[${minY}, ${maxY}] (height=${maxY - minY})`);
