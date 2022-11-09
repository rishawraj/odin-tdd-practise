import reverseString from "../code/reverseString";

describe("reverses strings", () => {
  test("ram should match mar", () => {
    expect(reverseString("ram")).toBe("mar");
  });
  test("website should match etisbew", () => {
    expect(reverseString("website")).toBe("etisbew");
  });
});
