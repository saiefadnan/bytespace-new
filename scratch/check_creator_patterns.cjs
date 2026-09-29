const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

function findPatternUsage(patId) {
  const regex = new RegExp('<rect[^>]*fill="url\\(#' + patId + '\\)"[^>]*>', 'g');
  const matches = [];
  let m;
  while ((m = regex.exec(svg)) !== null) {
    matches.push(m[0]);
  }
  return matches;
}

console.log('pattern58:', findPatternUsage('pattern58_1_1067'));
console.log('pattern66:', findPatternUsage('pattern66_1_1067'));
console.log('pattern67:', findPatternUsage('pattern67_1_1067'));
