'use strict';


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
        }
        return alert("Поздравляю, Вы угадали!!!");  
    } 
    return alert("Игра окончена");
}
askAnalyzeNumber();
}

guessNumber(72);
