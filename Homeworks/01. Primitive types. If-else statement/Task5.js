/*
    Задача 5:
    Създайте 3 различни променливи и ги разпечатайте в низходящ ред. Приемете, че
    променливите се въвеждат и могат да бъдат с всякакви стойности.
*/

var a1 = -3, a2 = 2, a3 = 9;

console.log("Initial data:");
console.log(a1 + " " + a2 + " " + a3);

//  За да ги разпечатам в обратен ред ще разменя стойностите им,
//  като в a1 запиша най-голямото число, а в а3 най-малкото

if(a1 > a3) {
    a1 = [a3, (a3 = a1)][0]; // EC6: [a1, a3] = [a3, a1];
}

if(a1 > a2) {
    a2 = [a1, (a1 = a2)][0]; // EC6: [a1, a2] = [a2, a1];
}

if(a2 > a3) {
    a3 = [a2, (a2 = a3)][0]; // EC6: [a2, a3] = [a3, a2];
}

console.log("Descending data");
console.log(a3 + " " + a2 + " " + a1);