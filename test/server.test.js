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
