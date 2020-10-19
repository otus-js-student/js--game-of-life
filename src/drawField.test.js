import { drawField } from "./drawField";

describe("drawField", () => {
  let onCellClick;
  let el;

  beforeEach(() => {
    onCellClick = jest.fn();
    el = document.createElement("div");
  });

  it("renders dead field 1x1", () => {
    drawField(el, [[0]], onCellClick);
    expect(el.querySelectorAll(".cell").length).toBe(1);
    expect(el.querySelectorAll(".cell.dead").length).toBe(1);
  });

  it("renders alive field 1x1", () => {
    drawField(el, [[1]], onCellClick);
    expect(el.querySelectorAll(".cell").length).toBe(1);
    expect(el.querySelectorAll(".cell.alive").length).toBe(1);
  });

  it("renders field mxn", () => {
    const field = [
      [0, 0, 0],
      [0, 0, 1],
      [1, 1, 0],
    ];
    drawField(el, field, onCellClick);
    expect(el.querySelectorAll(".cell").length).toBe(9);
    expect(el.querySelectorAll(".cell.alive").length).toBe(3);
    expect(el.querySelectorAll(".cell.dead").length).toBe(6);
  });

  describe("onCellClick", () => {
    it("calls onCellClick on cell click", () => {
      const field = [
        [0, 0, 0],
        [0, 0, 1],
        [1, 1, 0],
      ];
      drawField(el, field, onCellClick);
      const cell1 = el.querySelector('.cell[data-x="1"][data-y="2"]');
      cell1.click();
      expect(onCellClick).toHaveBeenCalledWith(1, 2);

      const cell2 = el.querySelector('.cell[data-x="2"][data-y="0"]');
      cell2.click();
      expect(onCellClick).toHaveBeenCalledWith(2, 0);
    });

    it("calls onCellClick only once on multiple drawing", () => {
      const field = [
        [0, 0, 0],
        [0, 0, 1],
        [1, 1, 0],
      ];
      drawField(el, field, onCellClick);
      drawField(el, field, onCellClick);
      const cell1 = el.querySelector('.cell[data-x="1"][data-y="2"]');
      cell1.click();
      expect(onCellClick).toHaveBeenCalledWith(1, 2);
      expect(onCellClick).toHaveBeenCalledTimes(1);
    });
  });
});
