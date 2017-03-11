function Page(title, text) {
    this.title = title;
    this.text = text;
}

Page.prototype = {
    constructor: Page,

    appendText: function(text) {
        this.text += text;
    },

    deleteText: function() {
        this.text = "";
    },

    viewPage: function() {
        console.log("Title: " + this.title);
        console.log("Text: \n" + this.text);
    },

    searchWord: function(word) {
        return this.text.includes(word);
    },

    containsDigits: function() {
        return /\d/.test(this.text);
    }
}

function SimpleNotepad(numberOfPages) {
    this.numberOfPages = numberOfPages;
    this.pages = new Array();
}

SimpleNotepad.prototype = {
    constructor: SimpleNotepad,

    addPage: function(title, text) {
        if (this.pages.length >= this.numberOfPages) {
            console.log("You can't add any more pages!");
            return;
        }
        this.pages.push(new Page(title, text));
    },

    addTextToPage: function(pageNumber, text) {
        if (!this.isInputPageNumberValid(pageNumber)) return;
        this.pages[pageNumber - 1].appendText(text);
    },

    changeTextToPage: function(pageNumber, text) {
        if (!this.isInputPageNumberValid(pageNumber)) return;
        this.pages[pageNumber - 1].deleteText();
        this.addTextToPage(pageNumber, text);
    },

    deleteTextFromPage: function(pageNumber) {
        if (!this.isInputPageNumberValid(pageNumber)) return;
        this.pages[pageNumber - 1].deleteText();
    },

    viewPage: function(pageNumber) {
        this.pages[pageNumber - 1].viewPage();
    },

    viewAllPages: function() {
        if (this.pages.length == 0) {
            console.log("You have no pages in the notepad!");
            return;
        }

        for (var index = 0; index < this.pages.length; index++) {
            currentPage = this.pages[index];
            console.log("Page number " + (index + 1) + ":");
            currentPage.viewPage();
            console.log();
        }
    },

    searchWord: function(word) {
        for (var index = 0; index < this.pages.length; index++) {
            currentPage = this.pages[index];
            if (currentPage.searchWord(word)) {
                return true;
            }
        }
        return false;
    },

    printAllPagesWithDigits: function() {
        for (var index = 0; index < this.pages.length; index++) {
            currentPage = this.pages[index];
            if (currentPage.containsDigits()) {
                console.log("Page number " + (index + 1) + ":");
                currentPage.viewPage();
                console.log();
            }
        }
        return false;
    },

    isInputPageNumberValid: function(pageNumber) {
        if (isNaN(pageNumber) || pageNumber <= 0 || pageNumber > this.pages.length) {
            console.log("Enter a valid number for the page!");
            return false;
        }
        return true;
    }
}

function SecuredNotepad(numberOfPages, password) {
    SimpleNotepad.call(this, numberOfPages);
    this.password = password;
}
SecuredNotepad.prototype = Object.create(SimpleNotepad.prototype);
SecuredNotepad.prototype.constructor = SecuredNotepad;
SecuredNotepad.prototype.parent = SimpleNotepad.prototype;
SecuredNotepad.prototype.checkIfPasswordIsCorrect = function(password) {
    if (this.password == password) {
        return true;
    }
    console.log("Incorrect password!");
    return false;
}
SecuredNotepad.prototype.addPage = function(title, text, password) {
    if (this.checkIfPasswordIsCorrect(password)) {
        this.parent.addPage.call(this, title, text);
    }
};
SecuredNotepad.prototype.addTextToPage = function(pageNumber, text, password) {
    if (this.checkIfPasswordIsCorrect(password)) {
        this.parent.addTextToPage.call(this, pageNumber, text);
    }
};
SecuredNotepad.prototype.changeTextToPage = function(pageNumber, text, password) {
    if (this.checkIfPasswordIsCorrect(password)) {
        this.parent.changeTextToPage.call(this, pageNumber, text);
    }
};
SecuredNotepad.prototype.deleteTextFromPage = function(pageNumber, password) {
    if (this.checkIfPasswordIsCorrect(password)) {
        this.parent.deleteTextFromPage.call(this, pageNumber);
    }
};
SecuredNotepad.prototype.viewPage = function(pageNumber, password) {
    if (this.checkIfPasswordIsCorrect(password)) {
        this.parent.viewPage.call(this, pageNumber);
    }
};
SecuredNotepad.prototype.viewAllPages = function(password) {
    if (this.checkIfPasswordIsCorrect(password)) {
        this.parent.viewAllPages.call(this);
    }
};
SecuredNotepad.prototype.searchWord = function(word, password) {
    if (this.checkIfPasswordIsCorrect(password)) {
        return this.parent.searchWord.call(this, word);
    }
    return "Access Denied";
};
SecuredNotepad.prototype.printAllPagesWithDigits = function(password) {
    if (this.checkIfPasswordIsCorrect(password)) {
        this.parent.printAllPagesWithDigits.call(this);
    }
};

function ElectronicDevice() {
    this.deviceState = false;
}

ElectronicDevice.prototype = {
    constructor: ElectronicDevice,

    start: function() {
        this.deviceState = true;
    },

    stop: function() {
        this.deviceState = false;
    },

    isStarted: function() {
        return this.deviceState;
    }
}

function ElectronicSecuredNotepad(numberOfPages, password) {
    SecuredNotepad.call(this, numberOfPages, password);
    this.device = new ElectronicDevice();
    this.start = function() {
        this.device.start();
    }
    this.stop = function() {
        this.device.stop();
    }
}
ElectronicSecuredNotepad.prototype = Object.create(SecuredNotepad.prototype);
ElectronicSecuredNotepad.prototype.constructor = ElectronicSecuredNotepad;
ElectronicSecuredNotepad.prototype.securedNotepad = SecuredNotepad.prototype;
ElectronicSecuredNotepad.prototype.checkIfDeviceIsOn = function() {
    if (this.device.isStarted()) {
        return true;
    }
    console.log("The device is turned off!");
    return false;
}
ElectronicSecuredNotepad.prototype.addPage = function(title, text, password) {
    if (this.checkIfDeviceIsOn()) {
        this.securedNotepad.addPage.call(this, title, text, password);
    }
};
ElectronicSecuredNotepad.prototype.addTextToPage = function(pageNumber, text, password) {
    if (this.checkIfDeviceIsOn()) {
        this.securedNotepad.addTextToPage.call(this, pageNumber, text, password);
    }
};
ElectronicSecuredNotepad.prototype.changeTextToPage = function(pageNumber, text, password) {
    if (this.checkIfDeviceIsOn()) {
        this.securedNotepad.changeTextToPage.call(this, pageNumber, text, password);
    }
};
ElectronicSecuredNotepad.prototype.viewPage = function(pageNumber, password) {
    if (this.checkIfDeviceIsOn()) {
        this.securedNotepad.viewPage.call(this, pageNumber, password);
    }
};
ElectronicSecuredNotepad.prototype.deleteTextFromPage = function(pageNumber, password) {
    if (this.checkIfDeviceIsOn()) {
        this.securedNotepad.deleteTextFromPage.call(this, pageNumber, password);
    }
};
ElectronicSecuredNotepad.prototype.viewAllPages = function(password) {
    if (this.checkIfDeviceIsOn()) {
        this.securedNotepad.viewAllPages.call(this, password);
    }
};
ElectronicSecuredNotepad.prototype.searchWord = function(word, password) {
    if (this.checkIfDeviceIsOn()) {
        return this.securedNotepad.searchWord.call(this, word, password);
    }
    return "Access Denied!";
};
ElectronicSecuredNotepad.prototype.printAllPagesWithDigits = function(password) {
    if (this.checkIfDeviceIsOn()) {
        this.securedNotepad.printAllPagesWithDigits.call(this, password);
    }
};

console.log("\n\nCreating new simple notepad!");

var notebook = new SimpleNotepad(11);

console.log("\nAdding 11 pages to the notepad!");
notebook.addPage("Information", "Name: Georgi, \nAge: 21");
notebook.addPage("Information", "School: TU-Sofia, \nSubject: Computer and software engeneering");
notebook.addPage("Semester 1 - Subjects", "Mathematics, \nPhisics");
notebook.addPage("Semester 1 - Marks", "5.25, \n6.00");
notebook.addPage("Semester 2 - Subjects", "Mathematics, \nPhisics");
notebook.addPage("Semester 2 - Marks", "4.25, \n5.00");
notebook.addPage("Semester 3 - Subjects", "Mathematics, \nPhisics");
notebook.addPage("Semester 3 - Marks", "3.25, \n2.00");
notebook.addPage("Semester 4 - Subjects", "");
notebook.addPage("Semester 4 - Marks", "");
notebook.addPage("Last page", "COPYRIGHT: DENI");

console.log("\nAdding another page to the notepad! (the pages are 11 we are trying to make them 12)");
notebook.addPage("Bonus page", "It should not add this page!");

console.log("\nAdd more text to pages 7 and 8");
console.log("*Before*");
notebook.viewPage(7);
console.log();
notebook.viewPage(8);
notebook.addTextToPage(7, "\nChemistry");
notebook.addTextToPage(8, "\n3.55");
console.log("\n*After*");
notebook.viewPage(7);
console.log();
notebook.viewPage(8);

console.log("\nChange marks in page 4");
console.log("*Before*");
notebook.viewPage(4);
notebook.changeTextToPage(4, "6.00, \n6.00");
console.log("\n*After*");
notebook.viewPage(4);

console.log("\n Delete last page text");
console.log("*Before*");
notebook.viewPage(notebook.pages.length);
notebook.deleteTextFromPage(notebook.pages.length);
console.log("\n*After*");
notebook.viewPage(notebook.pages.length);

console.log("\nView all pages");
notebook.viewAllPages();

console.log("\nSearch the word Mathematics and Linguistics in the notepad");
console.log("Does the student has subject Mathematics? : " + notebook.searchWord("Mathematics"));
console.log("Does the student has subject Linguistics? : " + notebook.searchWord("Linguistics"));

console.log("\nPrint all pages that contain a digit in them");
notebook.printAllPagesWithDigits();

console.log("*********************************");

function checkPassword(password) {
    var passwordPattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/g);
    if (passwordPattern.test(password)) {
        return password;
    } else {
        return false;
    }
}

var password = checkPassword("55JJkkl");

if (password) {
    console.log("\n\nCreating new secured notepad!");
    var securedNotepad = new SecuredNotepad(2, password);

    console.log("\nAdd 2 pages!");
    securedNotepad.addPage("Information", "Name: Ivana, \nAge: 22", "55JJkkl");
    securedNotepad.addPage("Last page", "COPYRIGHT: DENI", "55JJkkl");

    console.log("\nView all pages in the notepad");
    securedNotepad.viewAllPages("55JJkkl");

    console.log("\nDelete text page with wrong password!");
    securedNotepad.deleteTextFromPage(1);
}

console.log("*********************************");

if (password) {
    console.log("\n\nCreating new electronit secured notepad!");
    var electronicSecuredNotepad = new ElectronicSecuredNotepad(2, password);

    console.log("\nTurn the notepad ON!");
    electronicSecuredNotepad.start();

    console.log("\nAdd 2 pages!");
    electronicSecuredNotepad.addPage("Classified Data", "Destination: The mall, \nPrice: 5000$", "55JJkkl");
    electronicSecuredNotepad.addPage("Warning", "The risk is yours!\nWe don't care! :D", "55JJkkl");

    console.log("\nView all pages in the notepad");
    electronicSecuredNotepad.viewAllPages("55JJkkl");

    console.log("\nTry to search for a word \"mall\" with wrong password!");
    console.log("Result: " + electronicSecuredNotepad.searchWord("mall", "sdas"));

    console.log("\nTry to search for a word \"mall\" with the correct password!");
    console.log("Result: " + electronicSecuredNotepad.searchWord("mall", "55JJkkl"));

    console.log("\nTurning off the device!");
    electronicSecuredNotepad.stop();

    console.log("\nDelete text page with a device being off!");
    electronicSecuredNotepad.deleteTextFromPage(1);
}