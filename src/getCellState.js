/**
 * получить состояние клетки
 * @param field {number[][]} - состояние поля
 * @param x {number} - номер колонки
 * @param y {number} - номер строки
 * @return boolean - живая клетка или мертвая
 */
export function getCellState(field, x, y) {
  const row = field[y];
  if (row === undefined) {
    return false;
  }
  const cell = row[x];
  if (cell === undefined) {
    return false;
  }
  return cell === 1;
}
