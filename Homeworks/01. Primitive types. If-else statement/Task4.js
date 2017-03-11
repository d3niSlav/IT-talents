/*
    Задача 4:
    Създайте 2 различни променливи с произволни стойности и ги разпечатайте в
    нарастващ ред. Приемете, че променливите се въвеждат и могат да бъдат с 
    всякакви стойности.
*/

var a = 5, b = false;
sortPring(a, b);

a = 8;
b = -6;
sortPring(a, b);

a = 9;
b = 15;
sortPring(a, b);

function sortPring(a, b){
    console.log("\nInitial data: a = " + a + ", b = " + b);

    if((typeof a === "number") && (typeof b === "number")){
        if(a < b) {
            console.log("A(" + a + ") , B(" + b + ")");
        } else
        if(a > b) {
            console.log("B(" + b + ") , A(" + a + ")");
        } else {
            console.log("A(" + a + ") , B(" + b + ")");
        }
    } else {
        console.log("Invalid Data!");
    }
};