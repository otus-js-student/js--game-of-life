import { getCellState } from "./getCellState";

/**
 * узнать сколько живых соседей вокруг клетки
 * @param column {number} - номер колонки
 * @param row {number} - номер строки
 * @param field {number[][]} - состояние поля
 * @return number - число живых соседей
 */
export function getNumOfAliveNeighbours(column, row, field) {
  let neighbours = 0;

  for (let j = column - 1; j <= column + 1; j += 1) {
    neighbours += Number(getCellState(field, j, row - 1));
  }

  for (let j = column - 1; j <= column + 1; j += 1) {
    neighbours += Number(getCellState(field, j, row + 1));
  }

  neighbours += Number(getCellState(field, column - 1, row));
  neighbours += Number(getCellState(field, column + 1, row));

  return neighbours;
}
