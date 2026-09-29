const fs = require('fs');

const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Replace viewBox in svg tag
const modifiedSvg = content
  .replace(/<svg\s+width="[^"]+"\s+height="[^"]+"\s+viewBox="[^"]+"/, '<svg width="1240" height="900" viewBox="100 1740 1240 900"');

const html = `<!DOCTYPE html>
<html>
<head>
  <style>body { margin: 0; background: #fff; }</style>
</head>
<body>
${modifiedSvg}
</body>
</html>`;

fs.writeFileSync('scratch/view_cards_inline.html', html);
console.log('Written inline cards HTML, size:', html.length);
