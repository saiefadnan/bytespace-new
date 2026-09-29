const fs = require('fs');

const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

['image2_1_1067', 'image14_1_1067', 'image15_1_1067', 'image16_1_1067'].forEach((id, i) => {
  const match = content.match(new RegExp(`<image id="${id}"[^>]+xlink:href="data:image\\/([a-zA-Z]+);base64,([^"]+)"`));
  if (match) {
    fs.writeFileSync(`scratch/card_avatar_${i}.${match[1]}`, Buffer.from(match[2], 'base64'));
    console.log(`Extracted scratch/card_avatar_${i}.${match[1]}`);
  }
});
