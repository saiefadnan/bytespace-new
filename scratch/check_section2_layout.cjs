const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

// Section 2 boundaries:
// Top: paint2 cx="60.5" cy="3871.5" r="568.5"
// Bottom: paint0 cx="1290.5" cy="4476.5", paint4 cx="49" cy="4402"
// Student: x="149" y="3864" width="435" height="596" -> bottom is 4460!
// Total Revenue: x="121" y="3908" width="232" height="119"
// Year to Date: x="121" y="4058" width="134" height="135"
// Doodle: x="424" y="3978" width="216" height="216"
// Happy Students: x="404" y="4277" width="258" height="123"

// Right side:
// Let's find headline, paragraph, checklist items x and y coordinates!
// Headline starts at x="742.848" y="3978.63"

console.log('Visual left edge:', 121); // Total Revenue card starts at x=121
console.log('Visual right edge:', 662); // Happy Students card ends at 404+258 = 662
console.log('Visual top edge:', 3864); // Student starts at y=3864
console.log('Visual bottom edge:', 4460); // Student ends at y=4460

// Right side starts at x=743.
// Gap between visual (662) and text (743) is 743 - 662 = 81px!
// Grid in Figma: 1440 width. Margin 120px left and right.
// 1440 - 240 = 1200px content area.
// x=120 is the start of the 1200px content area!
// Notice: Total Revenue starts at x=121! Exactly at margin 120px!
// Headline starts at x=743. Column 7 starts at 120 + 6*(80 + 40) = 120 + 720 = 840 or 120 + 6*60+...
// 12 columns in 1200px: each col is 63.33px + 40px gutter.
// 6 cols = 6*63.33 + 5*40 = 380 + 200 = 580px.
