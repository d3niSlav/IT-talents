/*
    Задача 12: Да се състави програма, която извежда всички
    естествени трицифрени числа, които нямат еднакви цифри т.е.
    100,101, 606 и т.н. не се извеждат. 
*/

for (var testNumber = 100; testNumber <= 999; testNumber++) {
    var ones = Math.floor(testNumber % 10);
    var tens = Math.floor(testNumber / 10 % 10);
    var hundreds = Math.floor(testNumber / 100 % 10);

    if (ones == tens || ones == hundreds || tens == hundreds) {
        continue;
    }

    console.log(testNumber);
}