/*
    Задача 6:
    Създайте 3 променливи а1, а2 и а3 с произволни стойности. Разменете стойностите
    им така, че а1 да има стойността на а2, а2 да има стойността на а3, а а3 да има
    старата стойност на а1. Изведете новите стойности.
*/

var a1 = 5, a2 = -9, a3 = 8.65;

console.log("Old data:\na1 = " + a1 + ", a2 = " + a2 + ", a3 = " + a3);

var temp = a1;
a1 = a2;
a2 = a3;
a3 = temp;

console.log("New data:\na1 = " + a1 + ", a2 = " + a2 + ", a3 = " + a3);