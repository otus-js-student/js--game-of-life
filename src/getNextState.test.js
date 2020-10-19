import { getNextState } from "./getNextState";

/**
 * @param {number[][]} field
 * @returns string
 */
function fieldToStr(field) {
  return `\n${field.map((el) => el.join("")).join("\n")}\n`;
}

describe("getNextState", () => {
  [
    { field: [[0]], nextState: [[0]] },
    { field: [[0], [0]], nextState: [[0], [0]] },
    { field: [[1]], nextState: [[0]] },
    { field: [[0], [1]], nextState: [[0], [0]] },
    {
      field: [
        [1, 1],
        [1, 0],
      ],
      nextState: [
        [1, 1],
        [1, 1],
      ],
    },
    {
      field: [
        [1, 1],
        [1, 1],
      ],
      nextState: [
        [1, 1],
        [1, 1],
      ],
    },
    {
      field: [
        [1, 1, 1],
        [1, 1, 1],
      ],
      nextState: [
        [1, 0, 1],
        [1, 0, 1],
      ],
    },
    {
      field: [
        [1, 0, 1],
        [1, 0, 1],
      ],
      nextState: [
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
  ].forEach((el) => {
    it(`returns ${fieldToStr(el.nextState)} for ${fieldToStr(
      el.field
    )}`, () => {
      expect(getNextState(el.field)).toEqual(el.nextState);
    });
  });
});
