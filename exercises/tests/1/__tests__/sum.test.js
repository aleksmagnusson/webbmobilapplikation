const { sum } = require("../script.js");

test("1 + 2 blir 3", () => {
  expect(sum(1, 2)).toBe(3);
});
