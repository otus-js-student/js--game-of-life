/* eslint-disable no-param-reassign */

import { drawField } from "./drawField";

/**
 * Создание игры Жизнь
 * @param sizeX {number} - число колонок
 * @param sizeY {number} - число строк
 * @param htmlElement {HTMLElement} - элемент, в котором будет отрисована игра
 * @returns void
 */
export function createGameOfLife(sizeX, sizeY, htmlElement) {
  let gameIsRunning = false;

  // Создать блок для поля
  // Создать кнопку управления игрой
  htmlElement.innerHTML = `<div class="field-wrapper"></div><button>Start</button>`;
  const fieldWrapper = htmlElement.querySelector(".field-wrapper");
  const button = htmlElement.querySelector("button");

  // Создать поле заданного размера
  const field = Array.from({ length: sizeY }).map(() =>
    Array.from({ length: sizeX }).fill(0)
  );

  const cellClickHandler = (x, y) => {
    field[y][x] = field[y][x] === 0 ? 1 : 0;
    drawField(fieldWrapper, field, cellClickHandler);
  };

  // Отрисовать поле заданного размера
  drawField(fieldWrapper, field, cellClickHandler);
  // При клике по ячейке поля
  // - поменять его состояние
  // - перерисовать поле

  button.addEventListener("click", () => {
    if (!gameIsRunning) {
      // При клике по кнопке старт
      // - поменять надпись на `Stop`
      gameIsRunning = true;
      button.innerHTML = "Stop";
      // - запустить таймер для обновления поля
      //
    } else {
      gameIsRunning = false;
      button.innerHTML = "Start";
      // При клике на кнопке `Stop` остановить таймер
      //
    }
  });
  // В таймере обновления поля
  // - посчитать новое состояние поля
  // - отрисовать новое состояние поля
  // - проверить, что есть живые клетки
  // - если живых клеток нет
  //    - остановить таймер
  //    - вывести сообщение
}
