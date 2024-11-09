import formatText from "../src/utils/objectTextFormatter";

describe("formatText", () => {
  it("transforms empty text into empty text", () =>
    expect(formatText({}, "")).toBe(""));

  it("extracts the proper value from object", () =>
    expect(formatText({ val: 6 }, "$[val]")).toBe("6"));

  it("extracts multiple properties", () =>
    expect(
      formatText({ hello: "Hello", world: "world" }, "$[hello] $[world]!")
    ).toBe("Hello world!"));

  it("returns empty string on non-existent values", () =>
    expect(formatText({ a: "Hello" }, "$[a] $[b]")).toBe("Hello "));
});
