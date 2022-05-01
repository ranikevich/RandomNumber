'use strict';

let randomNum = parseInt(Math.random() * 100);
const attempt = 10;

function guessNumber(num, count) {
    function askAnalyzeNumber() {
        let a = '';
        if (count > 0) {
            count = count - 1;
            a = prompt("Угадай число от 1 до 100:");
            if (a !== null) {
                a = +a;
                if (num != a) {
                    (a != parseInt(a)) ? a = alert('Введи число!'):
                    (num < a) ? a = alert('Загаданное число меньше, осталось попыток: ' + count) :
                    (num > a) ? a = alert('Загаданное число больше, осталось попыток: ' + count) : null;
                    askAnalyzeNumber();
                } else {
                    (num == a) ? a = confirm("Поздравляю!!! Вы угадали. Хотели бы сыграть еще?") : null;
                    if (a == true) {
                        randomNum = parseInt(Math.random() * 100);
                        guessNumber(randomNum, attempt);
                    }
                }
            } else {
                a = alert("Игра окончена");
            }
        } else {
            a = confirm("Попытки закончились, хотите сыграть еще?");
            if (a == true) {
                randomNum = parseInt(Math.random() * 100);
                guessNumber(randomNum, attempt);
            }
        }
    }
askAnalyzeNumber();
}

guessNumber(randomNum, attempt);
