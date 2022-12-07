const { multiply } = require("../script.js");

test("1 * 2 blir 2", () => {
  expect(multiply(1, 2)).toBe(2);
});
