import { add, subtract, divide, multiply } from "../code/calculator";

describe("Calculator", () => {
  test("addition: 2+9 = 11", () => {
    expect(add(2, 9)).toBe(11);
  });

  test("subtraction: 45-5 = 40", () => {
    expect(subtract(45, 5)).toBe(40);
  });

  test("divison: 46 / 2 = 23", () => {
    expect(divide(46, 2)).toBe(23);
  });

  test("multipication: 45 * 2 = 90", () => {
    expect(multiply(45, 2)).toBe(90);
  });
});
