import { ceasorCipher } from "../code/ceasorCipher";

describe("ceasorCipher", () => {
  test("'cool' is converted to 'eqqn' | shift=2", () => {
    expect(ceasorCipher("cool", 2)).toBe("eqqn");
  });

  test("z-a wrapping", () => {
    expect(ceasorCipher("zebra", 2)).toBe("bgdtc");
  });

  test("mixed characters", () => {
    expect(ceasorCipher("RamunJana", 2)).toBe("TcowpLcpc");
  });

  test("special characters", () => {
    expect(ceasorCipher("hi!@nswer!", 2)).toBe("jk!@puygt!");
  });

  test("sentences", () => {
    expect(ceasorCipher("this is a sentence!", 2)).toBe("vjku ku c ugpvgpeg!");
  });
});
