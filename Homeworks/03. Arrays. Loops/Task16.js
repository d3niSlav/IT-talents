/*
    Задача 16:
    Да се състави програма, чрез която предварително въведени 10
    реални числа от интервала се обработват по следния начин: 
    1. Извежда съществуващите числа.
    2. Всички елементи със стойност по-малки от -0.231 се заменят със
    сумата от квадрата на индекса им + числото 41.25, а всички останали
    елементи се заменят с произведението между самия елемент и
    неговият пореден номер
    3. Да се изведат елементите от началния и новообразувания масив.
    4. Да се изведат средната стойност на всички елементи от новата
    редица, които са различни от 0.
    Пример: -1.12, -2.43, 3.1, 4.2, 0, 6.4, - 7.5, 8.6, 9.1, -4
    Изход: 42.25, 45.25, 9.3, 16.8, 0, 38.4, 90.25, 68.8, 81.9,141.25
*/

var array = [-1.12, -2.43, 3.1, 4.2, 0, 6.4, - 7.5, 8.6, 9.1, -4];
var result = "The original array: " + array + "\n";

var newArray = new Array(array.length);
for (var index = 0; index < array.length; index++) {
    if (array[index] < -0.231) {
        newArray[index] = Number((Math.pow(index + 1, 2) + 41.25).toFixed(2));
    } else {
        newArray[index] = Number((array[index] * (index + 1)).toFixed(2))
    }
}
result += "The new array: " + newArray + "\n";

var elementsCount = array.length;
var sum = 0;
for (var index = 0; index < newArray.length; index++) {
    if (newArray[index] != 0) {
        sum += newArray[index];
    } else {
        elementsCount--;
    }
}
var averageNonZero = Number((sum / elementsCount).toFixed(2));
result += "Average of all non - zero elements : " + averageNonZero;

console.log(result);