function Computer(year, price, isNotebook, hardDiskMemory, freeMemory, operationSystem) {
    this.year = year;
    this.price = price;
    this.isNotebook = isNotebook;
    this.hardDiskMemory = hardDiskMemory;
    this.freeMemory = freeMemory;
    this.operationSystem = operationSystem;
}

Computer.prototype = {
    constructor: Computer,

    changeOperationSystem: function(newOperationSystem) {
        this.operationSystem = newOperationSystem;
    },

    useMemory: function(memory) {
        if (isNaN(memory) || memory <= 0) {
            console.log("Enter valid number!");
            return;
        }

        if (this.freeMemory - memory >= 0) {
            this.freeMemory -= memory;
            console.log("You just used " + memory + "GB memory and have " + this.freeMemory + "GB free memory left!");
        } else {
            console.log("Not enough free memory!");
        }
    },

    comparePrice: function(computer) {
        if (!(computer instanceof Computer)) {
            console.log("Enter a valid PC to compare to!");
            return;
        }

        if (this === computer) {
            console.log("You can't compare to your own computer!");
            return;
        }

        if (this.price > computer.price) return -1;
        if (this.price < computer.price) return 1;
        if (this.price == computer.price) return 0;
    }
}

var lenovo = new Computer(2007, 800, false, 300, 157, "Windows 7");
var dell = new Computer(2015, 1500, true, 1000, 359, "Windows 8.1");
var hp = new Computer(2014, 1500, true, 750, 478, "Ubuntu")

console.log("Use memory for computer \"lenovo\" with total free memory " + lenovo.freeMemory + "/" + lenovo.hardDiskMemory + "GB!");
lenovo.useMemory(5);
lenovo.useMemory(-8);
lenovo.useMemory(200);
console.log();

console.log("Comparing PC to itself:");
showResult(lenovo.comparePrice(lenovo));

console.log("Comparing PC to null:");
showResult(lenovo.comparePrice(null));

console.log("Comparing PC to a more expensive PC:");
showResult(lenovo.comparePrice(dell));

console.log("Comparing PC to cheaper PC:");
showResult(hp.comparePrice(lenovo));

console.log("Comparing PCs with the same price:");
showResult(dell.comparePrice(hp));

function showResult(result) {
    switch (result) {
        case 1:
            console.log("Your PC is cheaper than the other!");
            break;
        case -1:
            console.log("Your PC is more expensive than the other!");
            break;
        case 0:
            console.log("Both PC's have the same price!");
            break;
    }
    console.log();
}