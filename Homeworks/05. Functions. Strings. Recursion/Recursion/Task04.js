/*
    Задача 4:
    Да се състави програма, чрез която по въведени начална и крайна цифра се
    извеждат на всеки нов ред следната последователност (триъгълник от знаци):
    Пример: 1, 9
    Изход:
    1
    1 2
    1 2 3
    ... до
    1 2 3 4 5 6 7 8 9
    Използвайте рекурсия
*/

printTriangle(1, 9);

function printTriangle(start, end) {
    if (end < start) {
        return "";
    }

    var result = printTriangle(start, end - 1);
    result += end + " ";
    console.log(result);

    return result;
}