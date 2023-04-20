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

// let numOne = +prompt("Введите первое число");

// let numTwo = +prompt("Введите второе число");

// let numThree = +prompt("Введите третье число");

// function maximumNumber(numOne, numTwo, numThree) {
//   let result = 0;
//   if (numOne > numTwo) {
//     if (numOne > numThree) {
//       result = numOne;
//     } else {
//       result = numThree;
//     }
//   } else if (numTwo > numThree) {
//     result = numTwo;
//   } else {
//     result = numThree;
//   }
//   return result;
// }

// let result = maximumNumber(numOne, numTwo, numThree);

// console.log(`Максимальное число ${result}`);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать
// по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение
// console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения
// в данном примере, ваши названия функций могут отличаться). Округлять значения,
// которые возвращают функции не нужно, однако, обратите внимание на разность,
// функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа
// равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity
// делать не нужно.

const sum = (numOne, numTwo) => numOne + numTwo;

console.log(sum(5, 3));

function subtract(numOne, numTwo) {
  if (numOne > numTwo) {
    result = numOne - numTwo;
  } else if (numTwo > numOne) {
    result = numTwo - numOne;
  } else {
    result = 0;
  }
  return result;
}

console.log(subtract(2, 5));

const composition = (numOne, numTwo) => numOne * numTwo;

console.log(composition(3, 5));

function share(numOne, numTwo) {
  if (numOne > numTwo) {
    result = numOne / numTwo;
  } else {
    result = numTwo / numOne;
  }
  return result;
}

console.log(share(5, 10));
