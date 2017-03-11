/*
    Задача 17:
    Една редица от естествени числа ще наричаме зигзагообразна нагоре,
    ако за елементите и са изпълняват условията:
    N1 < N2 > N3 < N4 > N5 <..
    Съставете програма, която проверява дали въведени в едномерен
    масив редица от числа изпълняват горните изисквания.
    Пример: 1 3 2 4 3 7
    Изход: изпълнява изискванията за зигзагообразна нагоре редица
*/

var array = [1, 3, 2, 4, 3, 7];
var isItZigZag = true;

for (var index = 0; index < array.length; index++) {
    if (index % 2 == 0) {
        if (array[index] >= array[index + 1]) {
            isItZigZag = false;
        }
    } else {
        if (array[index] <= array[index + 1]) {
            isItZigZag = false;
        }
    }
}

if (isItZigZag) {
    console.log("Meets the requirements for a zigzag-up series!")
} else {
    console.log("Does not meet the requirements for a zigzag-up series!")
}