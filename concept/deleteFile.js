const fs = require('fs')

fs.unlink('delete.js', (err) => {
    if (err) throw err
    console.log('file deleted')
})
