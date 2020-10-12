import { getCellState } from "./getCellState";

describe("getCellState", () => {
  const field = [
    [0, 0, 0, 0],
    [1, 0, 0, 1],
    [0, 0, 0, 0],
    [1, 0, 1, 0],
  ];
  const expectedCellStates = [
    [false, false, false, false],
    [true, false, false, true],
    [false, false, false, false],
    [true, false, true, false],
  ];

  it("returns `false` for [[0]]] 0:0", () => {
    expect(getCellState([[0]], 0, 0)).toBe(false);
  });

  it("returns list of cellStates", () => {
    for (let i = 0; i < field.length; i += 1) {
      for (let j = 0; j < field[i].length; j += 1) {
        expect(getCellState(field, j, i)).toBe(expectedCellStates[i][j]);
      }
    }
  });

  it("returns `false` for fields out of range", () => {
    for (let i = -1; i < 1; i += 1) {
      for (let j = -1; j < 1; j += 1) {
        expect(getCellState([], i, j)).toBe(false);
        expect(getCellState([[]], i, j)).toBe(false);
        expect(getCellState([[0]], i, j)).toBe(false);
      }
    }
  });
});
