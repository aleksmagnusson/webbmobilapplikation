const {
  getRandomNumberAsCallback,
  getRandomNumberAsPromise,
} = require("./../script");

/* const numberOne = (response, low, high) => {
  if (response >= low && response <= high) return true;
  else return false;
}; */

/* Dina tester här under */
test("Get a number between min and max value", async () => {
  const number = await getRandomNumberAsPromise(1, 10);
  expect(number).toBeGreaterThanOrEqual(1);
  expect(number).toBeLessThanOrEqual(10);
});

test("Make sure number as callback works as expected", async () => {
  getRandomNumberAsCallback(1, 10, result)();
  expect(number).toBeGreaterThanOrEqual(1);
  expect(number).toBeLessThanOrEqual(10);
});
