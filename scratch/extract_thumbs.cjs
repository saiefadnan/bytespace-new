const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

const imageIds = ['image13_1_1067', 'image17_1_1067', 'image18_1_1067', 'image19_1_1067', 'image20_1_1067', 'image21_1_1067'];

imageIds.forEach((id, idx) => {
  const match = content.match(new RegExp(`<image id="${id}"[^>]+xlink:href="data:image\\/([a-zA-Z]+);base64,([^"]+)"`));
  if (match) {
    const ext = match[1];
    const b64 = match[2];
    const outPath = `scratch/course_thumb_${idx}.${ext}`;
    fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
    console.log(`Saved ${outPath} (${b64.length} bytes b64)`);
  } else {
    console.log(`Not found: ${id}`);
  }
});
