const fs = require('fs');

const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');
const startIdx = content.indexOf('<rect x="120.5" y="1768.5" width="372" height="383"');
const nextIdx = content.indexOf('<rect x="533.5" y="1768.5" width="372" height="383"');
const cardChunk = content.slice(startIdx, nextIdx);

// Look at all paths: print their fills, first few coordinates
const re = /<path\s+d="([^"]+)"\s+fill="([^"]+)"/g;
let m;
while ((m = re.exec(cardChunk)) !== null) {
  const d = m[1];
  const fill = m[2];
  // extract first coordinate
  const firstCoord = d.match(/[MLHVCSQTAZmlhvcsqtaz]\s*([\d\.-]+)\s+([\d\.-]+)/);
  console.log(`Fill: ${fill}, FirstCoord: ${firstCoord ? firstCoord[1] + ',' + firstCoord[2] : 'none'}, path length: ${d.length}`);
}
