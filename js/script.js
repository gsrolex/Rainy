const url = "https://api.wowgold.one/wp-json/wc/store/products?per_page=100";

const productContainer = document.querySelector(".products");



async function getProducts() {
    try {
        const response = await fetch(url);
        const getResults = await response.json();

        createHTML(getResults);
    }

    catch (error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }

}

getProducts();

function createHTML(products) {
    products.forEach(function (product) {
        console.log(product);
        productContainer.innerHTML +=
            `<div class="pro">
                                           <img class="heart" onclick="toggleHeart(this)" src="../images/SVG/favorite-heart-button.svg"  alt="">
                                           <a href="product-women.html?id=${product.id}"><img class="jackets" src="${product.images[0].src}" alt="${product.name}" /></a>
                                           <p>${product.name}</p>
                                           <span class="gold">${product.prices.currency_symbol}${product.prices.price}</span>
                                           <a href="product-women.html?id=${product.id}"></a><span class="product-button">View Product</span></a>
                                        </div>`;
    })
}





