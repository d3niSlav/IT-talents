/*
    Задача 7:
    Да се състави програма, която чете набор от думи разделени с интервал.
    Като резултат да се извеждат броя на въведените думи, както и броя знаци в
    най-дългата дума.
    Пример: asd fg hjkl
    Изход: 3 думи, най-дългата е с 4 символа.
*/

var input = "asd fg hjkl";

var words = input.split(" ");
count = words.length;

var longest = 0;
for (var index = 0; index < count; index++) {
    if (words[index].length > longest) {
        longest = words[index].length;
    }
}

console.log(count + " words, the longest one is " + longest + " characters long");