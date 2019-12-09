const fs = require("fs");
const path = require("path");
const url = require("url");
const env = require("env2")(__dirname + "/.env");
const myRequest = require("./request.js");

const handleHome = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>Sorry, there is an error on our side :(");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};

const handlePublic = (request, response) => {
  const endpoint = request.url;
  const extension = endpoint.split(".")[1];
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
      response.end("<h1>Sorry, there is an error on our side :(<h1>");
    } else if (error) {
      response.writeHead(404, { "Content-Type": "text-html" });
      response.end("<h1>Sorry, page has not been found</h1>");
    } else {
      response.writeHead(200, {
        "Content-Type": extensionType[extension]
      });
      response.end(file);
    }
  });
};

const handleData = (request, response, endpoint) => {
  const weatherKey = process.env.DB_APIKEYWEATHER;
  const cityCode = endpoint.split("=")[1];
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityCode},uk&units=metric&APPID=${weatherKey}`;
  myRequest(url, (err, data) => {
    if (err) {
      console.log(err);
      response.writeHead(400, { "Content-Type": "text/html" });
      response.write("no data");
      response.end();
    } else {
      response.writeHead(200, { "Content-Type": "application/json" });
      let weatherInfo = {
        weatherDesc: data.body.weather[0].description,
        weatherTemp: data.body.main.temp
      };
      response.write(JSON.stringify(weatherInfo));
      response.end();
    }
  });
};

module.exports = {
  handleHome,
  handlePublic,
  handleData
};
