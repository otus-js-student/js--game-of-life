import { getNumOfAliveNeighbours } from "./getNumOfAliveNeighbours";

describe("getNumOfAliveNeighbours", () => {
  it("is a function", () => {
    expect(typeof getNumOfAliveNeighbours).toBe("function");
  });

  [
    { x: 0, y: 0, field: [[]], expectedResult: 0 },
    { x: 0, y: 0, field: [[0], [0]], expectedResult: 0 },
    { x: 0, y: 0, field: [[1], [1]], expectedResult: 1 },
    {
      x: 0,
      y: 0,
      field: [
        [0, 1, 0],
        [1, 0, 0],
      ],
      expectedResult: 2,
    },
    {
      x: 0,
      y: 0,
      field: [
        [1, 1],
        [1, 0],
      ],
      expectedResult: 2,
    },
    {
      x: 1,
      y: 0,
      field: [
        [1, 1],
        [1, 0],
      ],
      expectedResult: 2,
    },
    {
      x: 0,
      y: 1,
      field: [
        [1, 1],
        [1, 0],
      ],
      expectedResult: 2,
    },
    {
      x: 1,
      y: 1,
      field: [
        [1, 1],
        [1, 0],
      ],
      expectedResult: 3,
    },
    {
      x: 0,
      y: 0,
      field: [
        [1, 1],
        [1, 1],
      ],
      expectedResult: 3,
    },
  ].forEach((el) => {
    it(`should return ${el.expectedResult} for cell (${el.x},${
      el.y
    }) in field ${JSON.stringify(el.field)}`, () => {
      expect(getNumOfAliveNeighbours(el.x, el.y, el.field)).toBe(
        el.expectedResult
      );
    });
  });
});
