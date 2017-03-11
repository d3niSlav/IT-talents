/*
    Задача 1:
    Да се създадат 3 променливи А, В и С с числови стойности.
    Да се провери дали С е м/у a и b.
    Да се изведат числата заедно с подходящо съобщение за това дали C е между A и B.
*/

isItBetween(1,1,1);  // a = b = c
isItBetween(1,1,2);  // a = b, a < c, b < c
isItBetween(1,1,0);  // a = b, a > c, b > c
isItBetween(5,1,1);  // a > b, a > c, b = c
isItBetween(-9,1,1); // a < b, a > c, b = c
isItBetween(1,8,1);  // a < b, b > c, a = c
isItBetween(1,-6,1); // a > b, b < c, a = c
isItBetween(8,5,2);  // a > b > c
isItBetween(8,-9,0); // a > c > b 
isItBetween(3,8,1);  // b > a > c
isItBetween(1,8,4);  // b > c > a
isItBetween(1,-6,6); // c > a > b
isItBetween(5,1,9);  // c > a > b
isItBetween("", true, 4); // Invalid data

function isItBetween(a, b, c){
    if((typeof a === 'number') && (typeof b === 'number') && (typeof c === 'number')) {
        if((a > c && b < c) || (a < c && b > c)){
            console.log("The number C(" + c  + ") is between the numbers A(" + a + ") and B(" + b + ").");
        } else {
            console.log("The number C(" + c  + ") is NOT between the numbers A(" + a + ") and B(" + b + ").");
        }
    } else {
        console.log("Invalid data! \"a\", \"b\" and \"c\" must be numbers!");
    }
}