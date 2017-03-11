/*
    Задача 1:
    Да се прочете масив и да се намери най-малкото число кратно на
    3 от масива.

    10, 3, 5, 8, 6, -3, 7
    Най-малкото число кратно на 3 е -3
*/

var array = [10, 3, 5, 8, 6, -3, 7];
var minNumberMultipleByThree = null;

for (var index = 0; index < array.length; index++) {
    if (array[index] % 3 == 0) {
        minNumberMultipleByThree = array[index];
        break;
    }
}

if (minNumberMultipleByThree == null) {
    console.log("There is no number multiple by 3 in the array!");
} else {
    for (var index = 0; index < array.length; index++) {
        if (array[index] % 3 == 0 && array[index] < minNumberMultipleByThree) {
            minNumberMultipleByThree = array[index];
            break;
        }
    }
    console.log("The minimum number multiple by 3 from the array is : " + minNumberMultipleByThree);
}