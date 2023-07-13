var http = require('http');
var server = http.createServer(function(req, res) {
    console.log(req.url);  // on refresh the site
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('response end');
});

server.listen(3000, '127.0.0.1');
console.log('server is running at port 3000');
