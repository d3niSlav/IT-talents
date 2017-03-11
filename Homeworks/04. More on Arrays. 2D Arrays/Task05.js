/*
    Задача 5:
    Да се състави програма, при която предварително са въведени
    естествени числа в двумерен масив 4*4 елемента.
    Програмата да извежда резултат от проверката какво е съотношението
    на най-голямата сума по редове спрямо най-голямата сума по колони.
    Пример:
    1,2,3,4
    5,6,7,8
    9,10,11,12
    13,14,15,16
    Изход:
    най-голяма сума по редове 58
    най-голяма сума по колони 40
    Максималната сума по редове е > от максималната сума по колони
*/

var array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

var maxRowSum = 0;
var maxColumnSum = 0;
for (var row = 0; row < array.length; row++) {
    var tempRowSum = 0;
    var tempColumnSum = 0;
    for (var column = 0; column < array[row].length; column++) {
        tempRowSum += array[row][column];
        tempColumnSum += array[column][row];
    }     
    if(maxRowSum < tempRowSum){
        maxRowSum = tempRowSum;
    }
    if(maxColumnSum < tempColumnSum){
        maxColumnSum = tempColumnSum;
    }
}

var result = "";
result += "Maximum sum of elements from rows: " + maxRowSum + "\n";
result += "Maximum sum of elements from columns: " + maxColumnSum + "\n";
result += "The maximum sum of row elements is ";

var symbol;
if(maxRowSum > maxColumnSum){
    result += "GRATER ";
    symbol = '>';
} else if (maxRowSum < maxColumnSum){
    result += "SMALLER ";
    symbol = '<';
} else {
    result += "EQUAL ";
    symbol = '=';
}
result += "than the maximum sum of column elements!\n";
result += maxRowSum + " " + symbol + " " + maxColumnSum;

console.log(result);