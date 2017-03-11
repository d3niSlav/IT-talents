/*
    Задача 2:
    Да се състави програма, която изчислява произведение на две естествени
    числа =>2, като се използва само събиране.
    Входни данни: 2 естествени числа.
    Пример: 4, 5
    Изход: 20
*/

console.log(productOfTwoNumbers(4, 5));

function productOfTwoNumbers(firstNumber, secondNumber) {
    if (secondNumber > 1) {
        firstNumber += productOfTwoNumbers(firstNumber, secondNumber - 1);
    }
    return firstNumber;
}