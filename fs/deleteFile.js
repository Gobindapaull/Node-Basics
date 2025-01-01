const fs = require("fs");

const data = "Hello world!";

// Delete a file
fs.unlink("demo.txt", (error) => {
    if (error) throw error;
    console.log("File deleted!");
})
