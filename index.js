// Задание 1
// Создайте функцию которая возводит переданное число в куб,
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// const exponentiation = (num) => num * num * num;

// console.log(`Два в третьей степени = ${exponentiation(2)}
// Три в третьей степени = ${exponentiation(3)}`);

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст,
// необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа
// и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// let wages = +prompt("Введите вашу заработную плату до вычета");

// if (isNaN(wages)) {
//   alert("Значение задано неверно");
// }

// const netSalary = (wages) => {
//   return wages * 0.87;
// };

// console.log(netSalary(wages));

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию,
// которая определяет максимальное значение среди этих чисел

let numOne = +prompt("Введите первое число");

let numTwo = +prompt("Введите второе число");

let numThree = +prompt("Введите третье число");

function maximumNumber(numOne, numTwo, numThree) {
  let result = 0;
  if (numOne > numTwo) {
    if (numOne > numThree) {
      result = numOne;
    } else {
      result = numThree;
    }
  } else if (numTwo > numThree) {
    result = numTwo;
  } else {
    result = numThree;
  }
  return result;
}

let result = maximumNumber(numOne, numTwo, numThree);

console.log(`Максимальное число ${result}`);
