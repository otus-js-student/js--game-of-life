import { getNumOfAliveNeighbours } from "./getNumOfAliveNeighbours";
import { getCellState } from "./getCellState";
import { getNewCellState } from "./getNewCellState";

/**
 * получить новое состояние
 * @param field {number[][]} - состояние поля
 * @return number[][] - новое состояние поля
 */
export function getNextState(field) {
  // return field.map((row, rowIndex) =>
  //   {
  //     return row.map((cell, cellIndex) =>
  //     {
  //       const aliveNeighbours = getNumOfAliveNeighbours(cellIndex,rowIndex, field);
  //       const currentState = getCellState(field, cellIndex, rowIndex);
  //       const newState = getNewCellState(currentState, aliveNeighbours);
  //       return newState;
  //     })
  //   });

  return field.map((row, rowIndex) =>
    row.map((cell, cellIndex) => {
      const an = getNumOfAliveNeighbours(cellIndex, rowIndex, field);
      const currentState = getCellState(field, cellIndex, rowIndex);
      const newState = getNewCellState(currentState, an);
      return newState;
    })
  );
}
