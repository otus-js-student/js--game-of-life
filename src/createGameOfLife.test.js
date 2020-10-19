/* eslint-disable no-param-reassign */
import { createGameOfLife } from "./createGameOfLife";
import { drawField } from "./drawField";

jest.mock("./drawField");

describe("createGameOfLife", () => {
  let element;
  beforeEach(() => {
    element = document.createElement("div");
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  describe("UI", () => {
    it("creates Start button and field", () => {
      createGameOfLife(10, 10, element);
      expect(element.querySelector("button")).toBeTruthy();
      expect(element.querySelector("button").innerHTML).toBe("Start");
      expect(element.querySelector(".field-wrapper")).toBeTruthy();
    });
    it("changes button name on click", () => {
      createGameOfLife(10, 10, element);
      expect(element.querySelector("button").innerHTML).toBe("Start");
      element.querySelector("button").click();
      expect(element.querySelector("button").innerHTML).toBe("Stop");
      element.querySelector("button").click();
      expect(element.querySelector("button").innerHTML).toBe("Start");
      element.querySelector("button").click();
      expect(element.querySelector("button").innerHTML).toBe("Stop");
    });
    it("draws field", () => {
      drawField.mockImplementation((fieldEl, field) => {
        fieldEl.innerHTML = `drawField(${JSON.stringify(field)})`;
      });
      createGameOfLife(2, 2, element);
      expect(element.querySelector(".field-wrapper").innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [0, 0],
        ])})`
      );
    });
    it("redraw field on interaction with it", () => {
      let onCellClick;
      drawField.mockImplementation((fieldEl, field, cellClickHandler) => {
        onCellClick = cellClickHandler;
        fieldEl.innerHTML = `drawField(${JSON.stringify(field)})`;
      });
      createGameOfLife(2, 2, element);
      expect(element.querySelector(".field-wrapper").innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [0, 0],
        ])})`
      );
      onCellClick(0, 0);
      expect(element.querySelector(".field-wrapper").innerHTML).toBe(
        `drawField(${JSON.stringify([
          [1, 0],
          [0, 0],
        ])})`
      );
      onCellClick(0, 0);
      expect(element.querySelector(".field-wrapper").innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [0, 0],
        ])})`
      );
      onCellClick(0, 1);
      onCellClick(1, 1);
      expect(element.querySelector(".field-wrapper").innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [1, 1],
        ])})`
      );
    });
  });
});
