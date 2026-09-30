const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/404 Not Found.svg', 'utf8');

// Find paths near y=550 to y=800
const pMatches = svg.matchAll(/<path[^>]*d="([^"]+)"[^>]*fill="([^"]+)"[^>]*>/g);
for (const pm of pMatches) {
  const nums = pm[1].match(/-?\d+(\.\d+)?/g);
  if (nums && nums.length > 2) {
    const x = parseFloat(nums[0]);
    const y = parseFloat(nums[1]);
    if (y > 500 && y < 850 && pm[2] === 'white') {
      console.log('Path near text area:', x, y);
    }
  }
}
