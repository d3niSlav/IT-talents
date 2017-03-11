function Person(name, age, isMale) {
    this.name = name;
    this.age = age;
    this.isMale = isMale;
}

Person.prototype = {
    constructor: Person,

    showInfo: function() {
        this.showPersonInfo();
        console.log();
    },

    showPersonInfo: function() {
        console.log("Name: " + this.name + ";");
        console.log("Age: " + this.age + ";");
        console.log("Gender: " + (this.isMale ? "male" : "female") + ";");
    }
}

function Student(name, age, isMale, score) {
    Person.call(this, name, age, isMale);
    this.score = score;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.showInfo = function() {
    this.showPersonInfo();
    console.log("Score: " + this.score + ";");
    console.log();
}

function Employee(name, age, isMale, daySalary) {
    Person.call(this, name, age, isMale);
    this.daySalary = daySalary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.calculateOvertime = function(hours) {
    if (this.age < 18) {
        return 0;
    } else {
        return Math.round(this.daySalary * 1.5 * 100) / 100;
    }
}

Employee.prototype.showInfo = function() {
    this.showPersonInfo();
    console.log("Day salary: " + this.daySalary + "lv.");
    console.log();
}

var names = ['Polegat Durvarov', 'Mariq Trutkova', 'David Konski', 'Eliza Koaliza',
    'Kondio Mondio', 'Slaveq Paunova', 'Vanq Banqva', 'Demetriq Galileiova',
    'Krusha Qbulkova', 'Temenujka Minzuharena', 'Roza Beroza', 'Bosilek Kachamakov',
    'Rambo Purvokruvov', 'Galilei Polileiov', 'Anastas Naskov', 'Georgi Veselqshki'
];
var people = new Array(10);
for (var index = 0; index < people.length; index++) {
    if (index < 5) {
        people[index] = new Person(names.pop(), Math.floor(Math.random() * 100 + 1), true);
    } else {
        people[index] = new Person(names.pop(), Math.floor(Math.random() * 100 + 1), false);
    }
}
people.push(new Person(names.pop(), Math.floor(Math.random() * 100 + 1), false));
people.push(new Person(names.pop(), Math.floor(Math.random() * 100 + 1), true));
people.push(new Student(names.pop(), Math.floor(Math.random() * 18 + 6), false, Math.floor(Math.random() * 400 + 200) / 100));
people.push(new Student(names.pop(), Math.floor(Math.random() * 18 + 6), true, Math.floor(Math.random() * 400 + 200) / 100));
people.push(new Employee(names.pop(), Math.floor(Math.random() * 2 + 16), false, Math.floor(Math.random() * 48000 + 2000) / 100));
people.push(new Employee(names.pop(), Math.floor(Math.random() * 51 + 19), true, Math.floor(Math.random() * 48000 + 2000) / 100));

for (var index = 0; index < people.length; index++) {

    // Въпрос 5 от задачата:
    // При извикването на метода showInfo(), първо се проверява дали този метод го има
    // в prototype-а на обекта, и ако го няма, го търси в методите на обекта който наследява
    // (т.е. търси в методите на обектите в Protype chain-а)
    people[index].showInfo();

    // Using instanceof
    /*
        if (people[index] instanceof Student) {
            people[index].showStudentInfo();
            console.log();
            continue;
        }

        if (people[index] instanceof Employee) {
            people[index].showEmployeeInfo()
            console.log();
            continue;
        }

        people[index].showPersonInfo();
        console.log();
    */
}

for (var index = 0; index < people.length; index++) {
    if (people[index] instanceof Employee) {
        console.log("Salary for 2 hours work after day time to " + people[index].name + ": " + people[index].calculateOvertime(2) + "lv.");
        continue;
    }
}