/*
    Да се изведат на екрана числата от 10 до 1 в обратен ред.
    10 9 8 7 6 5 4 3 2 1
*/

var result = "";

for(var number = 10; number > 0; number--){
    result += number + " ";
}

console.log(result);