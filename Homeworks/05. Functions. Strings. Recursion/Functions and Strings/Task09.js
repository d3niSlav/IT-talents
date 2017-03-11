/*
    Задача 9:
    Да се състави програма, чрез която по въведен низ съдържащ букви, цифри,
    знак минус '-' се извежда сборът на въведените числа като се отчита знакът '-'
    пред съответното число.
    Вход: asd-12sdf45-56asdf100
    Изход:
    -12
    45
    -56
    100
    Сума = 77
*/

var numberPattern = /[-+]?\d+(\.\d+)*/g;
var input = "asd-12sdf45-56asdf100";

var numbers = input.match(numberPattern);
var sum = 0;

for (var index = 0; index < numbers.length; index++) {
    console.log(Number(numbers[index]));
    sum += Number(numbers[index]);
}

console.log("Sum = " + sum);