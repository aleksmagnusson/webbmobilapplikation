const Counter = require("./../script");

describe("Counter", () => {
  let counter = new Counter();

  afterEach(() => {
    // återställ
    counter.reset();
  });
  /* Skriv dina tester här nedan */
  test("Testa så att increase fungerar som tänkt", () => {
    counter.increase();
    const value = counter.getCount();

    expect(value).toBe(1);
  });

  test("Testa så att counter har återställts", () => {
    const value = counter.getCount();
    expect(value).toBe(0);
  });

  test("Testa så att brödrosten är på", () => {
    const value = counter.decrease();
    expect(value).toBe(-1);
  });
});
