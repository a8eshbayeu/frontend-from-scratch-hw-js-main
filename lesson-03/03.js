// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.
let number1;
let number2;
let number3;

function findLargest(number1, number2, number3) {
   if (number1 > number2 && number1 > number3) {
      return number1
   } else if (number2 > number1 && number2 > number3) {
      return number2
   } else (number3 > number1 && number3 > number2) {
      return number3
   }
}
