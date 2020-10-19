/* eslint-disable no-param-reassign */
/**
 * Создание игры Жизнь
 * @param _sizeX {number} - число колонок
 * @param _sizeY {number} - число строк
 * @param htmlElement {HTMLElement} - элемент, в котором будет отрисована игра
 * @returns void
 */
export function createGameOfLife(_sizeX, _sizeY, htmlElement) {
  let gameIsRunning = false;

  // Создать блок для поля
  // Создать кнопку управления игрой
  htmlElement.innerHTML = `<div class="field-wrapper"></div><button>Start</button>`;

  // Создать поле заданного размера
  //
  // Отрисовать поле заданного размера
  //
  // При клике по ячейке поля
  // - поменять его состояние
  // - перерисовать поле

  const button = htmlElement.querySelector("button");
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
