//* Task #1 Проверка строки на кол-во символов //*


const checkString = (string, maxString) => string.length <= maxString;

// Строка короче 20 символов
// console.log(checkString('проверяемая строка', 20)); // true
// // Длина строки ровно 18 символов
// console.log(checkString('проверяемая строка', 18)); // true
// // Строка длиннее 10 символов
// console.log(checkString('проверяемая строка', 10)); // false
checkString('проверяемая строка', 20);

// /* Task #2 проверка строки на палиндром */

const isPalindrom = (string) => {
  const cleaned = string.toLowerCase().replaceAll(' ', '');
  const reversed = cleaned.split('').reverse().join('');

  // console.log(cleaned === reversed)
  return cleaned === reversed;
};


// Строка является палиндромом
isPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrom('ДовОд'); // true
// Это не палиндром
isPalindrom('Кекс'); // false


/*  Task #3 проверка строки на наличие в ней чисел 0-9 и вывод чисел в консоль.   */

function checkStringNumber(string) {
  let result = '';

  string = string.toString();

  for (let i = 0; i < string.length; i++) {
    const currentChar = parseInt(string[i], 10);

    if (!Number.isNaN(currentChar)) {
      result += string[i];
    }
  }

  return parseInt(result, 10) || NaN;
}

checkStringNumber('2024');
// console.log(checkStringNumber('2023 год')); //2023
// console.log(checkStringNumber('ECMAScript 2022')); //2022
// console.log(checkStringNumber('1 кефир, 0.5 батона')); //105
// console.log(checkStringNumber('агент 007')); //7
// console.log(checkStringNumber('а я томат')); //NaN
// console.log(checkStringNumber(2023)); // 2023
// console.log(checkStringNumber(-1)); // 1
// console.log(checkStringNumber(1.5)); // 15
