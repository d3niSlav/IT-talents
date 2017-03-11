/*
    Задача 5:
    Да се състави програма, чрез която се въвежда естествено число N.
    Програмата да извежда число, чиито цифри са написани в ред обратен на
    въведеното число.
    Да се извежда съобщение дали въведеното число е палиндром.
    Пример: 12321
    Изход: 12321 да.
    Пример: 12578
    Изход: 87521 не.
    Използвайте рекурсия
*/

console.log(isNumericPalindrome(12321));

function isNumericPalindrome(number) {
    var result = "";

    if (number < 0) {
        result += "The number is negative! Is the absolute value of the number " + number + " a palindrom? \n";
        number = Math.abs(number);
    }

    result += number + " ";

    if (number < 10) {
        result += "yes";
    } else {
        number = String(number);
        if (isPalindrome(number, 0, number.length - 1)) {
            result += "yes";
        } else {
            result += "no";
        }
    }

    return result;
}

function isPalindrome(number, startIndex, endIndex) {
    if (startIndex >= endIndex) {
        return true;
    }
    return number.charAt(startIndex) == number.charAt(endIndex) && isPalindrome(number, (startIndex + 1), (endIndex - 1));
}