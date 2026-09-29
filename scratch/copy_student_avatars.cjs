const fs = require('fs');
for (let i = 0; i < 4; i++) {
  fs.copyFileSync(`scratch/card_avatar_${i}.png`, `src/assets/images/student-avatar-${i + 1}.png`);
  console.log(`Copied student-avatar-${i + 1}.png`);
}
