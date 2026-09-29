const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find all patterns, images, rects, and filters in the Hero section (y=0..1100)
console.log('--- HERO ELEMENTS (y < 1100) ---');
const regex = /<[^>]*>/g;
let m;
const heroElements = [];
while ((m = regex.exec(svg)) !== null) {
  const str = m[0];
  const nums = str.match(/[0-9.]+/g) || [];
  const inRange = nums.some(n => {
    const v = parseFloat(n);
    return v >= 50 && v < 1100;
  });
  if (inRange && (str.startsWith('<rect') || str.startsWith('<circle') || str.startsWith('<path') || str.startsWith('<use') || str.startsWith('<g') || str.startsWith('<image'))) {
    if (str.includes('fill="url(#pattern') || str.includes('fill="#D4FB20"') || str.includes('fill="#CBFC01"') || str.includes('pattern') || str.includes('filter')) {
      heroElements.push(str.substring(0, 160));
    }
  }
}

heroElements.forEach(e => console.log(e));
