let http = require("http");
let dt = require("./date");

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Current date and time: " + dt.myDateTime());
    res.end("<br>Hello World");
}).listen(8080);

console.log("Server running at http://localhost:8080/");
