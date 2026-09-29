const fs = require('fs');

const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Find paths around y=1640 to 1680 with x around 960 to 1050
const re = /<path[^>]+d="[^"]*M\s*([\d\.-]+)\s+([\d\.-]+)[^"]*"[^>]+fill="([^"]+)"/g;
let m;
while ((m = re.exec(content)) !== null) {
  const x = parseFloat(m[1]);
  const y = parseFloat(m[2]);
  if (y >= 1640 && y <= 1680 && x >= 960 && x <= 1060) {
    console.log(`Path at ${x}, ${y}, fill: ${m[3]}`);
  }
}
