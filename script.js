'use strict';

// генерация числа
const randomNumber = function (min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};

// проверка на число
const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const numberGame = function() {
    const hideNumber = randomNumber(1, 100);
    let tryings = 10;

    const startGame = function() {

      if (tryings === 0) {
        const lose = confirm('Попытки закончились, хотите сыграть еще?');
        if (lose === true) {
          numberGame();
        } else {
          alert('Игра окончена');
        }

      } else {
        const enteredNumber = prompt('Угадай число от 1 до 100');

        if (enteredNumber === null) {
            alert('Игра окончена');

        } else if (isNumber(enteredNumber)) {
            if (enteredNumber > hideNumber) {
              tryings--;
              alert(`Загаданное число меньше, осталось попыток: ${tryings}`);
              startGame();

            } else if (enteredNumber < hideNumber) {
              tryings--;
              alert(`Загаданное число больше, осталось попыток: ${tryings}`);
              startGame();
                    
            } else {
              const startAgain = confirm('Поздравляю, Вы угадали!!! Хотите сыграть еще?');
              if (startAgain === true) {
                numberGame();
              }
            }
            
        } else {
            alert('Введи число!');
            startGame();
        }
      }
  
  };

  startGame();
};

numberGame();
    






















