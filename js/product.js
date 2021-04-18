const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const url = "https://api.wowgold.one/wp-json/wc/store/products/";

const productName = document.getElementById("james");
const productPrice = document.getElementById("gold");
const mainImage = document.getElementById("mainPic");
const productDescription = document.getElementById("description");


async function makeApiCall() {
    try {
        const response = await fetch(url + id);
        const getResults = await response.json();
        createHTML(getResults);
    }

    catch (error) {
        console.log(error);
        productName.innerHTML = message("error", error);
    }
}

makeApiCall();

function createHTML(product) {
    productName.innerHTML = product.name
    productPrice.innerHTML = `${product.prices.currency_symbol}${product.prices.price}`
    mainImage.src = product.images[0].src
    productDescription.innerHTML = product.short_description
}


