const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Let's find where courses section is.
// The course cards have width="372" height="383"
const cardRegex = /<rect[^>]*width="372"[^>]*height="383"[^>]*>/g;
let m;
let lastY = 0;
while ((m = cardRegex.exec(svg)) !== null) {
  console.log('Card rect:', m[0]);
  const yMatch = m[0].match(/y="([0-9.]+)"/);
  if (yMatch) {
    lastY = Math.max(lastY, parseFloat(yMatch[1]));
  }
}

console.log('Last course card y:', lastY);

// Now let's see what elements exist between lastY (around 2200-2600) and the next section!
// Let's inspect elements from lastY to lastY + 600
const elemRegex = /<(rect|circle|text|path|g)[^>]*y="([0-9.]+)"[^>]*>/g;
let em;
while ((em = elemRegex.exec(svg)) !== null) {
  const y = parseFloat(em[2]);
  if (y >= lastY + 383 && y <= lastY + 800) {
    console.log(`Element after cards at y=${y}:`, em[0].substring(0, 100));
  }
}
