/*
    Задача 3:
    Да се състави програма, която проверява дали въведено естествено число е
    просто.
    Пример: 101
    Изход: просто
*/

const DIVISOR = 2;
var number = 101;

console.log(isPrime(number, DIVISOR));

function isPrime(number, divisor) {
    if (number > divisor) {
        if (number % divisor != 0) {
            return (isPrime(number, ++divisor));
        }
        else {
            return "Composite";
        }
    }
    return "Prime";
}
