import { isAnyoneAlive } from "./isAnyoneAlive";

describe("isAnyoneAlive", () => {
  it("is a function", () => {
    expect(typeof isAnyoneAlive).toBe("function");
  });

  it("returns `false` for empty field", () => {
    expect(isAnyoneAlive([])).toBe(false);
    expect(isAnyoneAlive([[]])).toBe(false);
  });

  it("returns `true` for field 1x1 from 1", () => {
    expect(isAnyoneAlive([[1]])).toBe(true);
  });
  [
    { field: [], expectedResult: false },
    { field: [[]], expectedResult: false },
    { field: [[1]], expectedResult: true },
    { field: [[1], [0]], expectedResult: true },
    { field: [[0], [0]], expectedResult: false },
    {
      field: [
        [0, 0, 0],
        [0, 0, 1],
      ],
      expectedResult: true,
    },
  ].forEach((el) => {
    it(`should return ${el.expectedResult} for ${JSON.stringify(
      el.field
    )}`, () => {
      expect(isAnyoneAlive(el.field)).toBe(el.expectedResult);
    });
  });
});
