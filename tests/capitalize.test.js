import capitalize from "../code/capitalize";

describe("Capitalize the first letter of a word", () => {
  test("ram => Ram", () => {
    expect(capitalize("ram")).toMatch("Ram");
  });
  test("tommy => Tommy", () => {
    expect(capitalize("tommy")).toMatch("Tommy");
  });
});
