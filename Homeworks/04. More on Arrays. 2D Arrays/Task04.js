/*
    Задача 4:
    Имате предварително въведени стойности на елементи в двумерен
    масив - естествени числа.
    Да се състави програма, чрез която се извеждат стойностите на
    елементите в двумерен масив след обръщането му на +90 градуса.
    Пример:
    1,2,3,4
    5,6,7,8
    9,10,11,12
    13,14,15,16
    Изход
    13,9,5,1
    14,10,6,2
    15,11,7,3
    16,12,8,4
*/

var array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

// Чрез допълнителен масив
console.log("With additional array");
var additionalArray = new Array(array.length);
for (var index = 0; index < array.length; index++) {
    additionalArray[index] = new Array(array.length);
}

for (var row = 0; row < array.length; row++) {
    for (var col = 0; col < array[row].length; col++) {
        additionalArray[row][col] = array[array.length - col - 1][row];
    }
}

showData(additionalArray);

// Чрез размяна на елементите на масива, с допълнителна променлива
console.log("With additional variable");
var n = array.length;
for (var row = 0; row < n / 2; row++) {
    for (var col = row; col < n - row - 1; col++) {
        temp = array[row][col];
        array[row][col] = array[n - col - 1][row];
        array[n - col - 1][row] = array[n - row - 1][n - col - 1];
        array[n - row - 1][n - col - 1] = array[col][n - row - 1];
        array[col][n - row - 1] = temp;
    }
}

showData(array);

function showData(array) {
    var result = "";
    for (var row = 0; row < array.length; row++) {
        for (var index = 0; index < array.length; index++) {
            result += array[row][index];
            index != array.length - 1 ? result += ", " : result += " ";
        }
        result += "\n";
    }
    console.log(result);
}