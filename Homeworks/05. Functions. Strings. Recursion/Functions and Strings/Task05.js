/*
    Задача 5:
    Да се състави програма, чрез която се въвеждат 2 редици от знаци (думи).
    Ако в двете редици участва един и същи знак, да се изведе на екрана първата
    редица хоризонтално, а втората вертикално, така че да се пресичат в общия си
    знак.
    Ако редиците нямат общ знак да се изведе само уведомително съобщение.
    Пример :
    м
    а
    шапка
    и
    н
    а
*/

var firstWord = "машина";
var secondWord = "шапка";

paint(firstWord, secondWord);

function paint(word1, word2) {
    var position = hasCommonCharacter(word1, word2);
    if (position != false) {
        var result = "";
        for (var row = 0; row < word1.length; row++) {
            for (var column = 0; column < word2.length; column++) {
                if (column == position.column) {
                    result += word1.charAt(row);
                } else if (row == position.row) {
                    result += word2.charAt(column);
                } else {
                    result += " ";
                }
            }
            result += "\n";
        }
    } else {
        result = "The words have no common character!";
    }
    console.log(result);
}

function hasCommonCharacter(word1, word2) {
    var position = { row: 0, column: 0 };

    for (var index1 = 0; index1 < word2.length; index1++) {
        for (var index2 = 0; index2 < word1.length; index2++) {
            if (word2.charAt(index1) == word1.charAt(index2)) {
                position.column = index1;
                position.row = index2;
                return position;
            }
        }
    }
    return false;
}