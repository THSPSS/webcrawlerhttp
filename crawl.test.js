const { normalizeURL } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

/*diff input and same output
'https://boot.dev' -> 'boot.dev'
'http://boot.dev'  -> 'boot.dev'
'http://Boot.dev'  -> 'boot.dev'
*/

test("normalizeURL strip protocol", () => {
  const input = "https://blog.boot.dev/path";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  //put actual value to expect function
  expect(actual).toEqual(expected);
});

test("normalizeURL strip trailing slash", () => {
  const input = "https://blog.boot.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  //put actual value to expect function
  expect(actual).toEqual(expected);
});

test("normalizeURL capitals", () => {
  const input = "https://BLOG.boot.dev/path";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  //put actual value to expect function
  expect(actual).toEqual(expected);
});

test("normalizeURL strip http", () => {
  const input = "http://blog.boot.dev/path";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  //put actual value to expect function
  expect(actual).toEqual(expected);
});
