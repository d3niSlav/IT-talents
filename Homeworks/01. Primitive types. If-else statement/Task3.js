/*
    Задача 3:
    Създайте 2 различни променливи и разменете стойността им. Разпечатайте новите
    стойности, като промяната на стойностите трябва да се случи и в паметта.
*/

var a = 2, b = 5;

if((typeof a === 'number') && (typeof b === 'number')){
    console.log("Initial data : a = " + a + ", b = " + b + "\n");

    swapMethod1(a, b);
    swapMethod2(a, b);
    swapMethod3(a, b);
    swapMethod4(a, b);
    swapMethod5(a, b);
    // swapMethod6(a, b); //Работи само с версии EcmaScript 6 или по-нови
} else {
    console.log("Invalid data!")
}

function swapMethod1(a, b){
    var temp = a;
    a = b;
    b = temp;
    console.log("Method 1 (using 3rd var): " + a + " " + b);
}

function swapMethod2(a, b){
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("Method 2 (+,-): " + a + " " + b);
}

function swapMethod3(a, b){
    if(b != 0){
        a = a * b;
        b = a / b;
        a = a / b;
        console.log("Method 3 (*,/): " + a + " " + b);
    } else {
        console.log("Method 3 (*,/): This method can't be used with zero numbers!");
    }
}

function swapMethod4(a, b){
    a = a ^ b;
    b = b ^ a;
    a = a ^ b;
    console.log("Method 4 (XOR ^): " + a + " " + b);
}

function swapMethod5(a, b){
    b = [a, a = b][0];
    console.log("Method 5 (using array): " + a + " " + b);
}

/*
function swapMethod6(a, b){
    [a, b] = [b, a];
    console.log("Method 6 (EC6): " + a + " " + b);
}
*/