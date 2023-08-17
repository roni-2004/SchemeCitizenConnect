const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome");
});

server.listen(2000, () => {
  console.log("Server running on port 2000..");
});
