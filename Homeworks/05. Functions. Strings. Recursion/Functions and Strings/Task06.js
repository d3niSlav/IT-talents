/*
    Задача 6:
    Да се състави програма, чрез която се въвежда изречение с отделни думи.
    Като резултат на екрана да се извежда същия текст, но всяка отделна дума да
    започва с главна буква, а следващите я букви да са малки.
    Пример: супер яката задача
    Изход: Супер Яката Задача
*/

var input = "super qkata zadacha";

console.log(changeString(input));

function changeString(str) {
    words = str.split(' ');
    var result = "";

    for (var index = 0; index < words.length; index++) {
        words[index] = words[index].trim();
        
        var newWord = words[index].charAt(0).toUpperCase() + words[index].slice(1);
        result += newWord + " ";
    }
    return result;
}