/*
    Задача 18:
    Дадени са два едномерни масива с естествени числа.
    Да се състави програма, която сравнява всички числа с еднакви
    индекси от двата масива и записва в трети масив, по-голямото от
    двете числа.
    Да се изведе съдържанието и на трите масива
    Пример:
    18,19,32,1,3, 4, 5, 6, 7, 8
    1, 2, 3,4,5,16,17,18,27,11
    Изход:
    18,19,32 ,4,5,16,17,18,27,11
*/

var firstArray = [18, 19, 32, 1, 3, 4, 5, 6, 7, 8];
var secondArray = [1, 2, 3, 4, 5, 16, 17, 18, 27, 11];
var thirdArray = new Array();

var length = firstArray.length > secondArray.length ? firstArray.length : secondArray.length;

for(var index = 0; index < length; index ++){
    if(firstArray[index] > secondArray[index]){
        thirdArray.push(firstArray[index]);
    } else {
        thirdArray.push(secondArray[index]);
    }
}

console.log(firstArray + "\n" + secondArray + "\n\n" + thirdArray);