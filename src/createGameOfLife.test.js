import { createGameOfLife } from "./createGameOfLife";

describe("createGameOfLife", () => {
  let element;
  beforeEach(() => {
    element = document.createElement("div");
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
  });
});
