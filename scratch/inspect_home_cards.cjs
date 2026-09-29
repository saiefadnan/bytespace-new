const fs = require('fs');

const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');
console.log('Home.svg size:', content.length);

const rects372 = content.match(/<rect[^>]*width=["']372["'][^>]*>/g);
console.log('Rects with width=372:', rects372);

// Check other rects around 300-400 width
const rectsAround = content.match(/<rect[^>]*width=["'](?:370|371|372|373|374|375|360|380)["'][^>]*>/g);
console.log('Rects around 370:', rectsAround);

// Check for images inside Home.svg
const images = content.match(/<image[^>]*>/g);
console.log('Total images in Home.svg:', images ? images.length : 0);
if (images) {
  images.slice(0, 10).forEach((img, i) => console.log(`Image ${i}:`, img.slice(0, 120)));
}
