/*
    Задача 1:
    Да се състави програма, която изчислява N-тото число на Фибоначи.
    Първото и второто число на Фибоначи са 1-ци, всяко следващо е равно на
    сбора на предходните 2.
    Пример: 8
    Изход: 21
*/

console.log(fibonacciNumbers(8));

function fibonacciNumbers(number) {
    if (number <= 2) {
        return 1;
    } else {
        return fibonacciNumbers(number - 2) + fibonacciNumbers(number - 1);
    }
}