const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find all elements between y=3800 and y=4600
// Also find gradient definitions: paint0, paint1, paint2, paint3, paint4, etc.

const defsMatch = svg.match(/<defs>([\s\S]*?)<\/defs>/);
const defs = defsMatch ? defsMatch[1] : '';

// Find gradients with ID matching paint0_radial_1_1067, paint2_radial, paint4_radial
console.log('--- DEF GRADIENTS ---');
const gradMatches = defs.match(/<radialGradient[^>]*id="paint[0-9]+_radial_1_1067"[^>]*>[\s\S]*?<\/radialGradient>/g) || [];
for (const g of gradMatches) {
  if (g.includes('38') || g.includes('39') || g.includes('40') || g.includes('41') || g.includes('42') || g.includes('43') || g.includes('44') || g.includes('45')) {
    console.log(g);
  }
}

// Find all rects, texts, paths around y=3800 - 4600
console.log('--- ELEMENTS IN SECTION ---');
const elemRegex = /<(rect|text|g|path|circle)[^>]*>/g;
let m;
while ((m = elemRegex.exec(svg)) !== null) {
  const str = m[0];
  if (str.includes('y="38') || str.includes('y="39') || str.includes('y="40') || str.includes('y="41') || str.includes('y="42') || str.includes('y="43') || str.includes('y="44') || str.includes('y="45') || str.includes('cy="38') || str.includes('cy="39') || str.includes('cy="40') || str.includes('cy="41') || str.includes('cy="42') || str.includes('cy="43') || str.includes('cy="44') || str.includes('cy="45')) {
    console.log(str);
  }
}
