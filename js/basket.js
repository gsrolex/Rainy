function addToBasket(itemName, size, price) {
    saveItemToLocalStorage(itemName, size, price);
    updateNumberOfItemsInCart();
}

function getItems() {
    let items = JSON.parse(localStorage.getItem("cart"));
    if (items == null) {
        items = [];
    }

    return items;
}

function saveItemToLocalStorage(itemName, size, price) {    
    let items = getItems();

    const item = [itemName, size, price];
    items.push(item);

    localStorage.setItem("cart", JSON.stringify(items));
}

function updateNumberOfItemsInCart() {
    let items = getItems();
    const resultsContainer = document.querySelector("#shopping-cart-items");

    resultsContainer.innerHTML = items.length
}

updateNumberOfItemsInCart()


function basketList() {
    const resultsContainer = document.querySelector(".cart-items");
    resultsContainer.innerHTML = "";

    let items = getItems();

    for (let i = 0; i < items.length; i++) {
        const itemName = items[i][0];
        const size = items[i][1];
        const price = items[i][2];

        resultsContainer.innerHTML += `<div class="cart-item">
                                        <h2>${itemName} ${size} $${price}</h2>
                                        <p><button onClick="removeItemFromCart(${i})">Remove</button></p>
                                      </div>`
    }
}

function removeItemFromCart(index) {
    let items = getItems();

    items.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(items));
    basketList();
}