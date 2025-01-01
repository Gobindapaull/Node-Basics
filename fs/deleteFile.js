const fs = require("fs");

// Delete a file
fs.unlink("demo.txt", (error) => {
    if (error) throw error;
    console.log("File deleted!");
})
