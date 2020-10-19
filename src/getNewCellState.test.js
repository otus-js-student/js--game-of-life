import { getNewCellState } from "./getNewCellState";

describe("getNewCellState", () => {
  it("should return valid new state", () => {
    expect(getNewCellState(0, 0)).toBe(0);
    expect(getNewCellState(0, 1)).toBe(0);
    expect(getNewCellState(0, 2)).toBe(0);
    expect(getNewCellState(0, 3)).toBe(1);
    expect(getNewCellState(0, 4)).toBe(0);
    expect(getNewCellState(0, 5)).toBe(0);
    expect(getNewCellState(0, 6)).toBe(0);
    expect(getNewCellState(0, 7)).toBe(0);
    expect(getNewCellState(0, 8)).toBe(0);

    expect(getNewCellState(1, 0)).toBe(0);
    expect(getNewCellState(1, 1)).toBe(0);
    expect(getNewCellState(1, 2)).toBe(1);
    expect(getNewCellState(1, 3)).toBe(1);
    expect(getNewCellState(1, 4)).toBe(0);
    expect(getNewCellState(1, 5)).toBe(0);
    expect(getNewCellState(1, 6)).toBe(0);
    expect(getNewCellState(1, 7)).toBe(0);
    expect(getNewCellState(1, 8)).toBe(0);
  });
});
