import { analyzeArray } from "../code/analyzeArray";

describe("Analyze Array", () => {
  test("average", () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).average).toBe(3);
  });

  test("min", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 5]).min).toBe(1);
  });

  test("max", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6]).max).toBe(6);
  });

  test("length", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7]).length).toBe(7);
  });
});
