/*
    Задача 8:
    Да се състави програма, чрез която се въвежда ред от символи (стринг, низ).
    Програмата да изведе на екрана дали въведения стринг е палиндром, т.е. дали
    четен отляво-надясно и отдясно-наляво е един и същ.
    Вход: капак
    Изход: да.
    Вход: тенджера
    Изход: не.
*/

var wordOne = "kapak";
var wordTwo = "tenjera";

console.log(wordOne + ": " + isPalindrome(wordOne));
console.log(wordTwo + ": " + isPalindrome(wordTwo));

function isPalindrome(word) {
    word = word.toLowerCase();

    var beginIndex = 0;
    var endIndex = word.length - 1;

    while (endIndex > beginIndex) {
        if (word.charAt(beginIndex) != word.charAt(endIndex)) {
            return "no";
        }
        ++beginIndex;
        --endIndex;
    }
    return "yes"
}