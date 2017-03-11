/*
    Задача 2:
    Създайте 2 различни целочислени променливи. Запишете тяхната сума, разлика,
    произведение, остатък от деление и целочислено деление в отделни променливи и
    изкарайте тези резултати в конзолата. Опитайте същото с числа с плаваща
    запетая.
*/

operations(6, 3);
operations(6.4, 2.4);
operations(8, 0);
operations("false", true);

function operations(a, b) {
    console.log("a = " + a + " b = " + b + "\n");

    if((typeof a === "number") && (typeof b  === "number")){
        var sum = a + b;
        var subtraction = a - b;
        var multiplication = a * b;
        var division;
        var modulus;

        if(b != 0){
            division = parseInt(a / b); //Целочислено деление
            modulus = a % b;
        } else {
            division = modulus = "Can't devide by 0!";
        }

        console.log("Sum: a + b = " + a + " + " + b + " = " + sum);
        console.log("Subtraction: a - b = " + a + " - " + b + " = " + subtraction);
        console.log("Multiplication: a * b = " + a + " * " + b + " = " + multiplication);
        console.log("Division: a / b = " + a + " / " + b + " = " + division);
        console.log("Modulus: a % b = " + a + " % " + b + " = " + modulus);
        console.log();
    } else {
        console.log("Invalid input, \"a\" and \"b\" must be numbers!\n");
    }
}