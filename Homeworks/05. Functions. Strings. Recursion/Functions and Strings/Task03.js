/*
   Задача 3:
   Да се състави програма, чрез която се въвеждат последователно две редици
   от символи без интервали.
   Програмата да извежда съобщение за резултата от сравнението им по
   позиции.
   Пример: хипопотам, хипопотук
   Изход:
   Двата низа са с равна дължина.
   Разлика по позиции:
   8 а-у
   9 м-к
*/

var firstWord = "хипопотам";
var secondWord = "хипопотук";

findDifferences(firstWord, secondWord);

function findDifferences(word1, word2) {
    var length = getSmallestWordLength(word1, word2);

    var result = "";
    for (var index = 0; index < length; index++) {
        if (word1.charAt(index) != word2.charAt(index)) {
            result += (index + 1) + " " + word1.charAt(index) + "-" + word2.charAt(index) + "\n";
        }
    }
    showDifferences(result);
}

function getSmallestWordLength(word1, word2) {
    if (word1.length > word2.length) {
        console.log("The first string is longer than the second.");
        return word2.length;
    } else if (word1.length < word2.length) {
        console.log("The second string is longer than the first.");
        return word1.length;
    } else {
        console.log("The strings have the same length.");
        return word1.length;
    }
}

function showDifferences(data){
    if (data.length != 0) {
        console.log("Differences:");
        console.log(data);
    } else {
        console.log("The strings are the same!")
    }
}