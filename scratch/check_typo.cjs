const fs = require('fs');
const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const coords = [
  { x: '120.5', y: '1768.5' },
  { x: '533.5', y: '1768.5' },
  { x: '946.5', y: '1768.5' },
  { x: '120.5', y: '2192.5' },
  { x: '533.5', y: '2192.5' },
  { x: '946.5', y: '2192.5' }
];

// Let's search in Typhography.svg or Course Details.svg to see if full strings exist
['Typhography.svg', 'Course Details.svg', 'Search Page.svg'].forEach(file => {
  const fContent = fs.readFileSync('src/assets/figma/' + file, 'utf8');
  console.log(`Checking ${file}...`);
});
