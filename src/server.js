const http = require("http");
const router = require("./router.js");
const PORT = process.env.PORT || 8888;

const server = http.createServer(router);

server.listen(PORT, () => {
  PORT === 8888
    ? console.log(`The server is listening on localhost: ${PORT}`)
    : console.log(`server is running on heroku site `);
});
