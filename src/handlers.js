const fs = require("fs");
const path = require("path");
const cities = require("./cities.js");
const url = require("url");

const handleHome = (request, response) => {
  console.log("handleHome - Is running");
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>Sorry, there is an error on our side :(");
    } else {
      console.log(path);
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};

const handlePublic = (request, response) => {
  const endpoint = request.url;
  const extension = endpoint.split(".")[1];
  console.log("ext: ", extension);
  console.log("endpoint: ", endpoint);
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/js",
    json: "application/json",
    ico: "image/x-icon"
  };
  const filePath = path.join(__dirname, "..", endpoint);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, {
        "Content-Type": "text/html"
      });
      response.end("<h1>Sorry, there is an error on our side :(");
    } else {
      response.writeHead(200, {
        "Content-Type": extensionType[extension]
      });
      response.end(file);
    }
  });
};

const handleData = (request, response, endpoint) => {
  let urlObject = url.parse(endpoint);
  let searchTerm = urlObject.query.split("=")[1];
  console.log(endpoint);
  let result = search(decodeURI(searchTerm));
  response.writeHead(200, {
    "Content-Type": "application/json"
  });
  response.end(JSON.stringify(result));
};

const search = term => {
  if (term === "") {
    return [];
  }
  return cities.filter(city => {
    let cityLowerCase = city.toLowerCase();
    let termLowerCase = decodeURI(term.toLowerCase());
    return (
      cityLowerCase.startsWith(termLowerCase) && cityLowerCase !== termLowerCase
    );
  });
};

module.exports = {
  handleHome,
  handlePublic,
  handleData
};
