const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Course Details.svg', 'utf8');

const imgRegex = /<image id="([^"]+)"[^>]*xlink:href="data:image\/([a-zA-Z]+);base64,([^"]+)"/g;
let m;
let idx = 0;
while ((m = imgRegex.exec(svg)) !== null) {
  const id = m[1];
  const ext = m[2] === 'jpeg' ? 'jpg' : m[2];
  const b64 = m[3];
  const filename = `scratch/course_details_img_${idx}_${id}.${ext}`;
  fs.writeFileSync(filename, Buffer.from(b64, 'base64'));
  console.log(`Saved ${filename} (${Math.round(b64.length * 0.75 / 1024)} KB)`);
  idx++;
}
