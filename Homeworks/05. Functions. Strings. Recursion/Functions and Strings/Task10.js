/*
    Задача 10:
    Да се състави програма, която по даден низ връща друг, символите, на
    който са получени като към всеки код на символ от ASCII таблицата е
    добавеното числото 5 и е записан новополучения символ.
    Пример :
    Вход: Hello
    Изход: Mjqqt
*/

var input = "Hello";
var output = "";

for (var index = 0; index < input.length; index++) {
    output += String.fromCharCode(input.charCodeAt(index) + 5);
}

console.log(output);