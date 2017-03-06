// Да се направи количка с продукти - при добавяне/махане - да се рефрешва на екрана.

function emptyCart() {
    var items = document.getElementById('list-items');

    while (items.firstChild) {
        items.removeChild(items.firstChild);
    }
}

function addProduct(product) {
    var newItemContainer = document.createElement('div')
    newItemContainer.className = "item";

    var buttonRemoveContainer = document.createElement('div');
    buttonRemoveContainer.className = "button";

    var deleteButton = document.createElement('span');
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", function() {
        deleteButton.closest("div.item").remove();
    }, false);

    buttonRemoveContainer.appendChild(deleteButton);
    newItemContainer.appendChild(buttonRemoveContainer);

    var itemImageContainer = document.createElement('div');
    itemImageContainer.className = "image";

    var itemImage = document.createElement('img');
    itemImage.alt = "Product: " + product.name;
    itemImage.src = product.imageUrl;

    itemImageContainer.appendChild(itemImage);
    newItemContainer.appendChild(itemImageContainer);

    var itemNameContainer = document.createElement('div');
    itemNameContainer.className = "name";

    var itemName = document.createElement('span');
    itemName.className = "name";
    var node = document.createTextNode(product.name);
    itemName.appendChild(node);

    itemNameContainer.appendChild(itemName);
    newItemContainer.appendChild(itemNameContainer);

    var itemQuantityContainer = document.createElement('div');
    itemQuantityContainer.className = "quantity";

    var plusButton = document.createElement('button');
    plusButton.className = "plus-btn";
    plusButton.type = "button";
    plusButton.name = "button";
    plusButton.addEventListener("click", function() {
        quantityInput.value = (parseInt(quantityInput.value) + 1);
        product.quantity++;
    }, false);

    var plusImage = document.createElement('img');
    plusImage.alt = "+";
    plusImage.src = "assets/images/plus.svg";

    plusButton.appendChild(plusImage);
    itemQuantityContainer.appendChild(plusButton);

    var minusButton = document.createElement('button');
    minusButton.className = "minus-btn";
    minusButton.type = "button";
    minusButton.name = "button";
    minusButton.addEventListener("click", function() {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = (parseInt(quantityInput.value) - 1);
            product.quantity--;
        }
    }, false);

    var quantityInput = document.createElement('input');
    quantityInput.type = "number";
    quantityInput.name = "quantity";
    quantityInput.value = product.quantity;

    itemQuantityContainer.appendChild(quantityInput);

    var minusImage = document.createElement('img');
    minusImage.alt = "-";
    minusImage.src = "assets/images/minus.svg";

    minusButton.appendChild(minusImage);
    itemQuantityContainer.appendChild(minusButton);

    newItemContainer.appendChild(itemQuantityContainer);

    document.getElementById("list-items").appendChild(newItemContainer);
}

var cake = {
    name: "Cake",
    quantity: 10,
    imageUrl: "assets/images/cake.png"
}

addProduct(cake);

var banitsa = {
    name: "Banitsa",
    quantity: 1,
    imageUrl: "assets/images/banitsa.png"
}

addProduct(banitsa);

var salad = {
    name: "Salad",
    quantity: 52,
    imageUrl: "assets/images/salad.png"
}

addProduct(salad);

var cremeBrulee = {
    name: "Crème brûlée",
    quantity: 13,
    imageUrl: "assets/images/cremeBrulee.png"
}

addProduct(cremeBrulee);