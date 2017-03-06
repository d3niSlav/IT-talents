function addProduct(product) {
    var newItemContainer = document.createElement('div')
    newItemContainer.className = "item";

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
    node = document.createTextNode("Quantity:");
    itemQuantityContainer.appendChild(node);

    var itemQuantity = document.createElement('span');
    itemQuantity.className = "quantity";
    node = document.createTextNode(product.quantity);
    itemQuantity.appendChild(node);

    itemQuantityContainer.appendChild(itemQuantity);
    newItemContainer.appendChild(itemQuantityContainer);

    document.getElementById("list-items").appendChild(newItemContainer);
}

var item = {
    name: "Cake",
    quantity: 10,
    imageUrl: "assets/images/cake.png"
}

addProduct(item);

item = {
    name: "Banitsa",
    quantity: 1,
    imageUrl: "assets/images/banitsa.png"
}

addProduct(item);

item = {
    name: "Salad",
    quantity: 52,
    imageUrl: "assets/images/salad.png"
}

addProduct(item);

item = {
    name: "Crème brûlée",
    quantity: 13,
    imageUrl: "assets/images/cremeBrulee.png"
}

addProduct(item);