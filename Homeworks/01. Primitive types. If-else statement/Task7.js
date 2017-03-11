/*
    Задача 7:
    Да се създата 3 променливи – час (целочислен тип), сума пари (число с плаваща
    запетая), дали съм здрав – булев тип.
    Съставете програма, която взема решения на базата на тези данни по следния начин:
        - ако съм болен - няма да излизам и:
            - ако имам пари ще си купя лекарства
            - ако нямам – ще стоя вкъщи и ще пия чай
        - ако съм здрав:
            - ако имам по-малко от 10 лв ще отида на кафе.
    Полученото решение покажете като съобщение в конзолата.
*/

var hour = 21;
var moneyAmount = 0;
var amIHealthy = false;

if(typeof hour === 'number' && typeof moneyAmount === 'number' && typeof amIHealthy === 'boolean') {
    if(!amIHealthy) {
        if(moneyAmount > 0){
            console.log("I will buy medicine!");
        } else {
            console.log("I will stay at home and dring some tea.");
        }
    } else {
        if(moneyAmount < 10) {
            console.log("I will go to the Cafe.");
        }
    }
} else {
    console.log("Invalid data!");
}