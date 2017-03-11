/*
    Задача 3: Да се изведат на екрана всички нечетни числа от -10 до 10
*/

for(var number = -10; number <= 10; number++){
    if(number % 2 != 0) {
        console.log(number);
    }
}