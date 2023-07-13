const urlObj = new URL('https://example.com:8080/example-path');
const hostname = urlObj.hostname;
const protocol = urlObj.protocol;
const port = urlObj.port;

console.log(hostname);
console.log(protocol);
console.log(port);
