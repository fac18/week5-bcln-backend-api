// Test your server routes by injecting fake HTTP requests using Supertest (including testing for 404's).
// Note - you are not required to test any server route that makes an API call, as this will make the test impure
//(a test that depends on an external factor is not reliable)

const test = require("tape");
const router = require("../src/router");
const supertest = require("supertest");

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

test("front-end api request receives a valid response", t => {
  supertest(router)
    .get(`/search?`)
    .expect(200)
    .expect("Content-type", /json/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "response code should be 200");
      t.end();
    });
});
