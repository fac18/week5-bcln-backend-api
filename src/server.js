const http = require("http");
const router = require("./router.js");
const port = process.env.PORT || 8888;

const server = http.createServer(router);

server.listen(port, () => {
  console.log("The server is listening on 8888. Ready to accept requests");
});
