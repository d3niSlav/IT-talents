/*
    Нека по въведен масив да се конструира нов, като половината му
    елементи са точно като на оригиналния, а другите да са тези
    елементи, но в обратен ред. Последно, да се изведе новия масив
    на екрана.

    5,2,5,8,3
    5 2 5 8 3 3 8 5 2 5 
*/

var array = [5, 2, 5, 8, 3];
var newArray = new Array(array.length * 2);
var result = "";

for (var indexNewArr = 0, indexArr = 0; indexNewArr < newArray.length; indexNewArr++) {
    newArray[indexNewArr] = array[indexArr];

    if (indexNewArr < newArray.length / 2 - 1) {
        indexArr++;
    } else if (indexNewArr > newArray.length / 2 - 1) {
        indexArr--;
    }
}

for (var index = 0; index < newArray.length; index++) {
    result += newArray[index] + " ";
}

console.log(result);