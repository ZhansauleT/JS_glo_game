let inputNumber;
let answer;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function guessNumber (number) {
  function correctAnswer() {
    answer = 18;
    console.log(number);

    if(number === answer){
      alert("Поздравляю, Вы угадали!!!");
      return;
    }else if(number > answer){
      number = +prompt("Загаданное число меньше");
      correctAnswer(number);
    }else if(number === null || number === 0){
      alert("Игра окончена");
    }else if(number < answer){
      number = +prompt("Загаданное число больше");
      correctAnswer(number);
    }else if(!isNumber(number)){
      number = +prompt("Введи число!");
      correctAnswer(number);
    }
  }

  return correctAnswer();
}


alert("Добро пожаловать в игру: Загадывание случайного числа от 1 до 100!");
inputNumber = +prompt("Угадай число от 1 до 100");
guessNumber(inputNumber);

