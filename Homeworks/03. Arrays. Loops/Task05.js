/*
    Задача 5:
    Напишете програма, която създава масив с 10 елемента и
    инициализира всеки от елементите със стойност равна на индекса на
    елемента умножен по 3.
    Да се изведат елементите на екрана.
*/

var array = new Array(10);
var result = "";

for (var index = 0; index < array.length; index++) {
    array[index] = index * 3;
}

for (var index = 0; index < array.length; index++) {
    result += array[index] + " ";
}

console.log(result);