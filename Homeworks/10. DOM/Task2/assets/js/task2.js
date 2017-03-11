// Да се създаде функция, която изкарва стойностите на всички инпут-и в нови параграфи.

function displayContentOfInputFields() {
    var inputs = document.getElementsByTagName('input');
    var resultContainer = document.getElementById('result-box');

    removeAllChildren(resultContainer);

    for (var index = 0; index < inputs.length; index++) {
        var newParagraph = document.createElement("p");
        var text = document.createTextNode(inputs[index].value);

        newParagraph.appendChild(text);
        newParagraph.className = index % 2 == 0 ? "top" : "bottom";

        resultContainer.appendChild(newParagraph);
    }
}

function removeAllChildren(node) {
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
}