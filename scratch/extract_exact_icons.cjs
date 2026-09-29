const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Course Details.svg', 'utf8');

// Find all elements between y=950 and y=1100 around x=940-975
const pRegex = /<path[^>]*d="([^"]+)"[^>]*>/g;
let m;
const icons = [];
while ((m = pRegex.exec(svg)) !== null) {
  const full = m[0];
  const d = m[1];
  const nums = d.match(/-?\d+(\.\d+)?/g);
  if (nums && nums.length > 2) {
    const x = parseFloat(nums[0]);
    const y = parseFloat(nums[1]);
    if (x >= 948 && x <= 975 && y >= 950 && y <= 1110) {
      icons.push({ y, full });
    }
  }
}

console.log('Total icon paths found:', icons.length);
icons.forEach(ic => console.log(`y=${ic.y}: ${ic.full}`));
