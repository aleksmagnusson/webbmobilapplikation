const { reverseString, isBetween, chunk } = require("./../script");

// Skriv tester för reverseString, isBetween och chunk.
// och försök uppnå 100% test coverage!

describe("Testing reverseString", () => {
  test("ReverseString throws an error when not passed a string", () => {
    expect(() => reverseString(10)).toThrow();
  });
});
