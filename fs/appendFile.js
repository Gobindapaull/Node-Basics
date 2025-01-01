const fs = require("fs");

const data = "Hello world!";

// Create a new file
fs.appendFile('demo.txt', data, (error) => {
    if (error) throw error;
    console.log("Saved!");
});
