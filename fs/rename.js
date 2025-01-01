const fs = require("fs");

// Rename a file
fs.rename("demo.txt", "demo1.txt", (error) => {
    if (error) throw error;
    console.log("File renamed!");
})
