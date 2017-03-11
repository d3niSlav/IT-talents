/*
    Задача 20:
    Да се състави програма, чрез която се извежда квадрат от
    цифри. Сумите от елементите на произволен ред или стълб са
    равни на 45.
    Пример:
    1 2 3 4 5 6 7 8 9 0
    2 3 4 5 6 7 8 9 0 1
    3 4 5 6 7 8 9 0 1 2
    4 5 6 7 8 9 0 1 2 3
    5 6 7 8 9 0 1 2 3 4
    6 7 8 9 0 1 2 3 4 5
    7 8 9 0 1 2 3 4 5 6
    8 9 0 1 2 3 4 5 6 7
    9 0 1 2 3 4 5 6 7 8
    0 1 2 3 4 5 6 7 8 9 
*/

var unusedNumbers = 1;
var result = "";

// The sum of the numbers from 0 to 9 is 45
for (var row = 0; row <= 9; row++) {
    for (var number = unusedNumbers; number <= 9; number++) {
        result += number + " ";
    }
    for (var number = 0; number < unusedNumbers; number++) {
        result += number + " ";
    }
    result += "\n";
    unusedNumbers++;
}
console.log(result);