const fs = require('fs');

const content = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// The 18 rects:
const rects = [
  // Row 1 (y=1520)
  { label: 'Featured', x: 175, y: 1520, w: 96, h: 43, rx: 21.5, bg: '#D4FB20', textFill: '#172400' },
  { label: 'Music', x: 287, y: 1520, w: 75, h: 43, rx: 21.5, bg: '#F5F5F6' },
  { label: 'Drawing & Painting', x: 378, y: 1520, w: 170, h: 43, rx: 21.5, bg: '#F5F5F6' },
  { label: 'Marketing', x: 564, y: 1520, w: 105, h: 43, rx: 21.5, bg: '#F5F5F6' },
  { label: 'Animation', x: 685, y: 1520, w: 105, h: 43, rx: 21.5, bg: '#F5F5F6' },
  { label: 'Social Media', x: 806, y: 1520, w: 124, h: 43, rx: 21.5, bg: '#F5F5F6' },
  { label: 'UI/UX Design', x: 946, y: 1520, w: 130, h: 43, rx: 21.5, bg: '#F5F5F6' },
  { label: 'Creative Marketing', x: 1092, y: 1520, w: 169, h: 43, rx: 21.5, bg: '#F5F5F6' },

  // Row 2 (y=1584)
  { label: 'Digital Illustration', x: 243, y: 1584, w: 157, h: 43, rx: 21.5, bg: '#F5F5F6' },
  { label: 'Film & Video', x: 416, y: 1584, w: 123, h: 43, rx: 21.5, bg: '#F5F5F6' },
  { label: 'Crafts', x: 555, y: 1584, w: 76, h: 43, rx: 21.5, bg: '#F5F5F6' },
  { label: 'Freelance & Entrepreneurship', x: 647, y: 1584, w: 246, h: 43, rx: 21.5, bg: '#F5F5F6' },
  { label: 'Graphic Design', x: 909, y: 1584, w: 144, h: 43, rx: 21.5, bg: '#F5F5F6' },
  { label: 'Photography', x: 1069, y: 1584, w: 126, h: 43, rx: 21.5, bg: '#F5F5F6' },

  // Row 3 (y=1648)
  { label: 'Productivity', x: 407.5, y: 1648, w: 118, h: 43, rx: 21.5, bg: '#F5F5F6' },
  { label: 'Web Development', x: 541.5, y: 1648, w: 166, h: 43, rx: 21.5, bg: '#F5F5F6' },
  { label: 'Data Science', x: 723.5, y: 1648, w: 127, h: 43, rx: 21.5, bg: '#F5F5F6' },
  { label: 'Cooking', x: 866.5, y: 1648, w: 94, h: 43, rx: 21.5, bg: '#F5F5F6' }
];

console.log('Total items in 3 rows:', rects.length + 1);
console.log('Row 1 (8 items):', rects.slice(0, 8).map(r => r.label));
console.log('Row 2 (6 items):', rects.slice(8, 14).map(r => r.label));
console.log('Row 3 (4 items + + More):', rects.slice(14, 18).map(r => r.label), '+ "+ More"');
