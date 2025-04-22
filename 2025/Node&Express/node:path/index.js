const path = require('node:path');
console.log(path)
const filePath = '/mnt/c/2025/node/path/image.png'

console.log(path.basename(filePath)); // image
console.log(path.dirname(filePath)); // /mnt/c/2025/node/path
console.log(path.extname(filePath)); // .png

const parsed = path.parse(filePath);
console.log(parsed);
/**
 {
  root: '/',
  dir: '/mnt/c/2025/node/path',
  base: 'image.png',
  ext: '.png',
  name: 'image'
}
 */
