var fs = require('fs');
// read file
var file_readed = fs.readFileSync('text.txt', 'utf-8');
var message = 'some text\n\n' + file_readed;
console.log(file_readed);
// write file
fs.writeFileSync('create_file.txt', message);
