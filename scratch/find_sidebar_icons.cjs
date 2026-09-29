const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Course Details.svg', 'utf8');

// Find all paths in Course Details.svg and print their bounds or d
const pRegex = /<path[^>]*d="([^"]+)"[^>]*>/g;
let m;
const paths = [];
while ((m = pRegex.exec(svg)) !== null) {
  const d = m[1];
  // extract some numbers to see where it is
  const nums = d.match(/-?\d+(\.\d+)?/g);
  if (nums && nums.length > 2) {
    const x = parseFloat(nums[0]);
    const y = parseFloat(nums[1]);
    if (x > 930 && x < 970 && y > 880 && y < 1120) {
      console.log('Icon path near sidebar includes:', x, y, m[0].slice(0, 150));
    }
  }
}
