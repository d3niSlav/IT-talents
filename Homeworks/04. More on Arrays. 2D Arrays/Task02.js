/*
    Задача 2:
    Имате квадратен двумерен масив от естествени числа, чийто стойности
    се въвеждат от промпт. Да се отпечатат диагоналите на масива.
    Пример:
    1,4,6,3
    5,9,7,2
    4,8,1,9
    2,3,4,5
    Изход:
    1 9 1 5
    3 7 8 2
*/

var array = [
    [1, 4, 6, 3],
    [5, 9, 7, 2],
    [4, 8, 1, 9],
    [2, 3, 4, 5]
]

var firstDiagonal = "";
var secondDiagonal = "";

for (var index = 0; index < array.length; index++) {
    firstDiagonal += array[index][index] + " ";
    secondDiagonal += array[index][array.length - 1 - index] + " ";
}

console.log(firstDiagonal);
console.log(secondDiagonal);