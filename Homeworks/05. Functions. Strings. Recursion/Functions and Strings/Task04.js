/*
    Задача 4:
    Да се състави програма, чрез която по въведени трите имена на двама човека
    разделени със запетая, се извежда чие име има по-голям сбор от ASCII
    кодовете на съставящите името букви.
    Пример: Anna Dosewa Asenowa, Iwo Peew Peew
    Изход: Anna Dosewa Asenowa
*/

var input = "Anna Dosewa Asenowa, Iwo Peew Peew";
var names = input.split(",");

var firstName = names[0].trim();
var secondName = names[1].trim();

console.log(compareLengthsInASCII(firstName, secondName));

function compareLengthsInASCII(name1, name2) {
    firstNameLength = getNameLengthInASCII(name1);
    secondNameLength = getNameLengthInASCII(name2);

    if (firstNameLength > secondNameLength) {
        return name1;
    } else if (firstNameLength < secondNameLength){
        return name2;
    } else {
        return "\"" + name1 + "\" and \"" + name2 + "\" have the same sum of ASCII code";
    }
}

function getNameLengthInASCII(name) {
    var length = 0;
    for (var index = 0; index < name.length; index++) {
        length += name.charCodeAt(index);
    }
    return length;
}