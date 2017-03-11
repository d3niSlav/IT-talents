function Task(name, workingHours) {
    this.name = name;
    this.workingHours = workingHours;
}

function Employee(name, currentTask, hoursLeft) {
    this.name = name;
    this.currentTask = currentTask;
    this.hoursLeft = hoursLeft;

}

Employee.prototype = {
    constructor: Employee,

    work: function() {
        if (this.currentTask !== null) {
            if (this.hoursLeft < this.currentTask.workingHours) {
                this.currentTask.workingHours -= this.hoursLeft;
                this.hoursLeft = 0;
            } else {
                this.hoursLeft -= this.currentTask.workingHours;
                this.currentTask.workingHours = 0;
            }
        }
        this.showReport();
    },

    showReport: function() {
        console.log("*Report*");
        console.log("Employee name: " + this.name);
        if (this.currentTask !== null) {
            console.log("Current task: " + this.currentTask.name);
            console.log("Hours left for completing the current task: " + this.currentTask.workingHours);
        } else {
            console.log("Current task: none");
        }
        console.log("Hours left for the day: " + this.hoursLeft);
    }
}

var employee = new Employee("Ivan Georgiev", new Task("Write code", 7), 4);
console.log("For today, the employee " + employee.name + " has " + employee.hoursLeft + " hours left for work.");
console.log("He starts a new task \"" + employee.currentTask.name + "\".");
employee.work();
console.log("He leaves work!");
console.log();

employee.hoursLeft = 8;
console.log("A new day has come. " + employee.name + " has " + employee.hoursLeft + " hours to work.");
employee.work();
employee.currentTask = new Task("Refactor code", 7);
console.log("He starts a new task \"" + employee.currentTask.name + "\".");
employee.hoursLeft = 8;
employee.work();
console.log("He leaves work!");
console.log();

employee.hoursLeft = 8;
console.log("A new day has come. " + employee.name + " has " + employee.hoursLeft + " hours to work.");
employee.currentTask = new Task("Show and review code", 8);
employee.work();
console.log("He leaves work!");