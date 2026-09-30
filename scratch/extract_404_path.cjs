const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/404 Not Found.svg', 'utf8');

const match = svg.match(/<path d="([^"]+)" fill="url\(#paint0_linear_63_252\)"\/>/);
if (match) {
  console.log('404 full path d length:', match[1].length);
  fs.writeFileSync('scratch/404_path.txt', match[1]);
  console.log('Saved to scratch/404_path.txt');
} else {
  console.log('Not found');
}
