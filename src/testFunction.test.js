import testFunction from "./testFunction";

describe("testFunction", () => {
  it("is a function", () => {
    expect(typeof testFunction).toBe("function");
  });

  it('returns "Hello world"', () => {
    expect(testFunction()).toEqual("Hello world");
  });
});
