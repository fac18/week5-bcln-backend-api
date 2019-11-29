const test = require("tape");
const router = require("../src/router");
const supertest = require("supertest");
// const env = require("env2")(__dirname + "/config.env");
const weatherKey = process.env.DB_APIKEYWEATHER;
const nock = require("nock");
const myRequest = require("../src/request");

test("Initialise", t => {
  let num = 2;
  t.equal(num, 2, "Should return 2");
  t.end();
});

test("Home route", t => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "should return 200");
      t.end();
    });
});

test("Return an error if the route is wrong", t => {
  supertest(router)
    .get("/any")
    .expect(404)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 404, "Oh drag! 404 not found.");
      t.end();
    });
});

test("css file is working with status code 200", t => {
  supertest(router)
    .get("/public/style.css")
    .expect(200)
    .expect("Content-type", /css/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200);
      t.end();
    });
});

//Nock is an HTTP server mocking and expectations library for Node.js.

test("Verifying if myRequest correcly fetches data", t => {
  nock("https://jsonplaceholder.typicode.com")
    .get("/todos/1")
    .reply(200, { title: "delectus aut autem" });
  console.log("hello");
  myRequest("https://jsonplaceholder.typicode.com/todos/1", (err, res) => {
    t.error(err);
    console.log("This is err", err);
    t.equal(res.statusCode, 200, "The API should have the status code of 200");
    console.log("res.statusCode", res.statusCode);
    t.end();
  });
});

// test("Verifying if myRequest correcly fetches data", t => {
//   supertest(router).get("http://api.openweathermap.org");
//   console.log("WORK");
//   myRequest(
//     `http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=${weatherKey}`,
//     (err, res) => {
//       t.error(err);
//       console.log("This is err WORK", err);
//       t.equal(
//         res.statusCode,
//         200,
//         "The API should have the status code of 200"
//       );
//       console.log("res.statusCode", res.statusCode);
//       t.end();
//     }
//   );
// });
