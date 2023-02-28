// console.log("HELLO WORLD");





//Step 2 - Create Server
//We use the created HTTP instance and call http.createServer() method to create a server instance and then we bind it to port 8081 using the listen method associated with the server instance. We pass it a function with the parameters request and response.
//Write the sample implementation to always return "Hello World".
const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello Node!!!!!');
});

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});