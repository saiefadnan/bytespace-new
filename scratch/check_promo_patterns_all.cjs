const fs = require('fs');

const svg = fs.readFileSync('src/assets/figma/Home.svg', 'utf8');

console.log('pattern72:', svg.match(/<pattern id="pattern72_1_1067"[\s\S]*?<\/pattern>/)[0]);
console.log('pattern76:', svg.match(/<pattern id="pattern76_1_1067"[\s\S]*?<\/pattern>/)[0]);
console.log('pattern78:', svg.match(/<pattern id="pattern78_1_1067"[\s\S]*?<\/pattern>/)[0]);
console.log('pattern68:', svg.match(/<pattern id="pattern68_1_1067"[\s\S]*?<\/pattern>/)[0]);
console.log('pattern80:', svg.match(/<pattern id="pattern80_1_1067"[\s\S]*?<\/pattern>/)[0]);
