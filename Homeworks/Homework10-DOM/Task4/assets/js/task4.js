/*
Да се създаде конструткор за човек - име, години и снимка.
Да се добави метод, който да съдава див с елементи с данните
за този обект. Да се тества.
*/

function Person(name, age, pictureUrl) {
    this.name = name;
    this.age = age;
    this.pictureUrl = pictureUrl;
}

function addNewPerson(person) {
    var newContainer = document.createElement("div");
    newContainer.className = "container";

    var profilePictureContainer = document.createElement("div");
    profilePictureContainer.className = "profile-picture-container";

    var profileImage = document.createElement("img");
    profileImage.className = "profile-picture";
    profileImage.alt = "Photo";
    profileImage.src = person.pictureUrl;
    profilePictureContainer.appendChild(profileImage);

    var informationContainer = document.createElement("div");
    informationContainer.className = "information";

    var nameLabel = document.createElement("span");
    nameLabel.className = "info";
    node = document.createTextNode("Name:");
    nameLabel.appendChild(node);
    informationContainer.appendChild(nameLabel);

    var name = document.createElement("span");
    var node = document.createTextNode(person.name);
    name.appendChild(node);
    informationContainer.appendChild(name);

    var ageLabel = document.createElement("span");
    ageLabel.className = "info";
    node = document.createTextNode("Age:");
    ageLabel.appendChild(node);
    informationContainer.appendChild(ageLabel);

    var age = document.createElement("span");
    node = document.createTextNode(person.age);
    age.appendChild(node);
    informationContainer.appendChild(age);

    newContainer.appendChild(profilePictureContainer);
    newContainer.appendChild(informationContainer);

    document.body.appendChild(newContainer);
}

var person1 = new Person("Kamelia", 21, "assets/images/profile1.jpg");
addNewPerson(person1);

var person2 = new Person("Stoichko", 48, "assets/images/profile2.jpg");
addNewPerson(person2);