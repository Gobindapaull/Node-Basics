const http = require('http')

console.log(http)
console.log(http.STATUS_CODES)

const server = http.createServer((req, res) => {
    res.end("This is the response from the server using http module")
})

server.listen(3000, "localhost", () => {
    console.log('Server is listening at http://localhost:3000')
})
