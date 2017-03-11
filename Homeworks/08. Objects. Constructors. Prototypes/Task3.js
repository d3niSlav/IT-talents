function Student(name, subject, grade, age) {
    this.name = name;
    this.subject = subject;
    this.grade = grade;
    this.yearInCollege = 1;
    this.age = age;
    this.hasDegree = false;
    this.money = 0;
}

Student.prototype = {
    constructor: Student,

    upYear: function() {
        if (this.yearInCollege < 4) {
            if (++this.yearInCollege == 4) {
                this.hasDegree = true;
            }
            console.log(this.name + " just passed another year. (New year: " + this.yearInCollege + ")");
        } else {
            console.log(this.name + " has already finnished university and has a degree!");
        }
    },

    receiveScholarship: function(min, amount) {
        if (isNaN(min) || isNaN(amount) || min < 3 || min > 6 || amount < 0) {
            console.log("Enter valid minimum grade and amount for the scholarship!");
            return;
        }

        if (this.age < 30 && this.grade >= min) {
            this.money += amount;
            console.log("Congratulations! " + this.name + " recieved a scholarship of " + amount + "lv.")
        } else {
            console.log(this.name + " does not meet the requirements for a scholarship! ");
            console.log("Needed grade: " + min + " (this student: " + this.grade + ") and age below 30 (this student: " + this.age + ")!");
        }
        return this.money;
    },

    printStudentsInGroup: function() {
        console.log("Name: " + this.name);
        console.log("Subject: " + this.subject);
        console.log("Year: " + this.yearInCollege);
        console.log("Grade: " + this.grade);
    }
}

function StudentGroup(groupSubject) {
    this.groupSubject = groupSubject;
    this.students = new Array();
    this.freePlaces = 5;
}

StudentGroup.prototype = {
    constructor: StudentGroup,

    addStudent: function(student) {
        if (!(student instanceof Student)) {
            console.log("Enter a valid student!");
            return;
        }

        if (this.freePlaces > 0) {
            if (student.subject == this.groupSubject) {
                this.students.push(student);
                this.freePlaces--;
                console.log("The student " + student.name + " was added in the \"" + this.groupSubject + "\" group.");
            } else {
                console.log("The student " + student.name + " cannot be placed in the \"" + this.groupSubject + "\" group!");
            }
        } else {
            console.log("There are no more free places in the \"" + this.groupSubject + "\" group!");
        }
    },

    emptyGroup: function() {
        this.students = new Array();
        this.freePlaces = 5;
    },

    theBestStudentName: function() {
        if (this.students.length > 0) {
            var bestGrade = this.students[0].grade;
            var bestStudentName = this.students[0].name;

            for (var index = 0; index < this.students.length; index++) {
                currentStudent = this.students[index];
                if (bestGrade < currentStudent.grade) {
                    bestGrade = currentStudent.grade;
                    bestStudentName = currentStudent.name;
                }
            }
            return bestStudentName;
        }

        console.log("There are no students in the group!");
        return false;
    }
}

var programmingGroup = new StudentGroup("Software engeneering");
console.log("The group \"" + programmingGroup.groupSubject + "\" was created!");
programmingGroup.addStudent(new Student("Yordan Petrov", "Software engeneering", 3.98, 19));
programmingGroup.addStudent(new Student("Polq Asenova", "Software engeneering", 3.65, 22));
programmingGroup.addStudent(new Student("Angel Botev", "Hardware engeneering", 4, 19));
programmingGroup.addStudent(new Student("Plamena Kirilova", "Software engeneering", 5.2, 32));
programmingGroup.addStudent(new Student("Kristina Antonova", "Software engeneering", 6, 19));
programmingGroup.addStudent(new Student("Milen Todorov", "Software engeneering", 4.65, 19));
programmingGroup.addStudent(new Student("Anatoli Bojkov", "Software engeneering", 3.22, 19));
console.log();

var medicineGroup = new StudentGroup("Medicine");
console.log("The group \"" + medicineGroup.groupSubject + "\" was created!")
medicineGroup.addStudent(new Student("Lora Krumova", "Medicine", 5, 20));
medicineGroup.addStudent(new Student("Petur Kolev", "Software engeneering", 4.5, 21));
medicineGroup.addStudent(new Student("Georgi Atanasov", "Medicine", 4, 20));

function gradeUpStudents(group, studentsCount) {
    if (group.students.length == 0) {
        console.log("There are no students in this group!");
        return;
    }

    for (var index = 0; index < studentsCount; index++) {
        var currentStudent = group.students[Math.floor(Math.random() * (group.students.length))];
        currentStudent.upYear();
    }
}
console.log();
console.log("Grade up students from the \"" + medicineGroup.groupSubject + "\" group 10 times:");
gradeUpStudents(medicineGroup, 10);


function giveScholarships(group, scolarshipCount) {
    if (group.students.length == 0) {
        console.log("There are no students in this group!");
        return;
    }

    for (var index = 0; index < scolarshipCount; index++) {
        var currentStudent = group.students[Math.floor(Math.random() * (group.students.length))];
        var newMoneyAmount = currentStudent.receiveScholarship(Math.floor(Math.random() * 3 + 3), Math.floor(Math.random() * 500 + 100));
        if (newMoneyAmount) {
            console.log(currentStudent.name + " has " + newMoneyAmount + "lv. in his bank account!");
        }
        console.log();
    }
}
console.log();
console.log("Give scholarships to students from the \"" + programmingGroup.groupSubject + "\" group 20 times:");
giveScholarships(programmingGroup, 20);

function showInfoForAllStudentsInGroup(group) {
    if (group.students.length == 0) {
        console.log("There are no students in this group!");
        return;
    }

    for (var index = 0; index < group.students.length; index++) {
        group.students[index].printStudentsInGroup();
        console.log();
    }
}
console.log();
console.log("Show information about all students from the \"" + medicineGroup.groupSubject + "\" group:");
showInfoForAllStudentsInGroup(medicineGroup);

console.log("The best student from the \"" + programmingGroup.groupSubject + "\" group is " + programmingGroup.theBestStudentName() + ".");

console.log();
console.log("Empty the \"" + programmingGroup.groupSubject + "\" group.");
programmingGroup.emptyGroup();
console.log("Show information about all students from the \"" + programmingGroup.groupSubject + "\" group:");
showInfoForAllStudentsInGroup(programmingGroup);