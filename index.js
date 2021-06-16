// TODO: Ocultar URL
// TODO: Subir repo
// TODO: Hacer Github Pages
// TODO: Generar QR

const SHEETY_API = 'https://api.sheety.co/a7ff2e700cac66745b92a39e8840a60b/onlineStoreExample/inventario';
const SHEET_BEST_API = 'https://sheet.best/api/sheets/5a3fbcf0-8ee0-4e62-b189-70e8876846cc';

// Currency Format Entity
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

/**
 * @description Function that process requests using asynchronously
 * @param {*} url: url to request data
 * @returns data response from the url
 */
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

/**
 * @description Function that manipulates DOM to create product nodes dynamically
 * @param {*} product: each product will be created like this
 */
function buildProductCard(product){
    if (product.inventario > 0 ) {
        if(!product.imagen) product.imagen = './placeholder-image.png'
    
        // Create elements needed to build a card
        const card = document.createElement("div");
        const img = document.createElement("img");
        const cardBody = document.createElement("div");
        const h5 = document.createElement("h5");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
    
        // Append newly created elements into the DOM
        const body = document.getElementById('content');
        body.append(card);
            card.append(img);
            card.append(cardBody);
                cardBody.append(h5);
                cardBody.append(p1);
                cardBody.append(p2);
        // Set content and attributes
        h5.innerHTML = product.nombre;
        p1.innerHTML = `${formatter.format(product.precio )}`;
        p2.innerHTML = product.descripcion;
        img.setAttribute("src", product.imagen);
        card.setAttribute("class", "card mb-4 ");
        img.setAttribute("class", "card-img-top");
        cardBody.setAttribute("class", "card-body");
        h5.setAttribute("class", "card-title");
        p1.setAttribute("class", "card-text");
        p2.setAttribute("class", "card-text");
    }
};

// Executes data fetch and executes buildCardProduct function for each product
fetchData(SHEET_BEST_API).then(productos => {
    productos.inventario.forEach(product => {
        buildProductCard(product)
    });
})
