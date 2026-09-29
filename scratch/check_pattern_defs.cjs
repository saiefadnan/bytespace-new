const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

function getPattern(id) {
  const m = svg.match(new RegExp('<pattern id="' + id + '"[\\s\\S]*?<\\/pattern>'));
  return m ? m[0] : null;
}

console.log('pattern66:', getPattern('pattern66_1_1067'));
console.log('pattern67:', getPattern('pattern67_1_1067'));
