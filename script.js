'use strict';

let randomNum = parseInt(Math.random() * 100);

function guessNumber(x) {
    function askAnalyzeNumber() {
        let a = prompt("Угадай число от 1 до 100:");
        if (a !== null) {   
        a = +a;
        if (x != a) {
            (a != parseInt(a)) ? a = confirm('Введи число!'):
            (x < a) ? a = confirm('Загаданное число меньше') :
            (x > a) ? a = confirm('Загаданное число больше') : null;
            askAnalyzeNumber();
        } else {
            alert("Поздравляю!!! Вы угадали");
        }
    } else {
        alert("Игра окончена");
    }
}
askAnalyzeNumber();
}

guessNumber(randomNum);
