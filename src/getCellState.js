/**
 * получить состояние клетки
 * @param field {number[][]} - состояние поля
 * @param x {number} - номер колонки
 * @param y {number} - номер строки
 * @return number
 */
export function getCellState(field, x, y) {
  const row = field[y];
  if (row === undefined) {
    return 0;
  }
  const cell = row[x];
  if (cell === undefined) {
    return 0;
  }
  return cell;
}
