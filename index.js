/*
 * @Author: aleneri97 
 * @Date: 2021-06-19 18:12:25 
 * @Last Modified by: aleneri97
 * @Last Modified time: 2021-06-16 19:34:11
 */
// TODO: Ocultar URL

let productos = [{
        id: 1,
        nombre: "s",
        descripcion: "Solo una prueba",
        precio: '$1,000',
        inventario: 2,
        imagen: "https://picsum.photos/400",
        imagen2: "https://picsum.photos/500",
        imagen3: ""
    },
    {
        id: 2,
        nombre: "s",
        descripcion: "Solo una prueba",
        precio: '$1,000',
        inventario: 2,
        imagen: "https://picsum.photos/600",
        imagen2: "",
        imagen3: ""
    },
    {
        id: 3,
        nombre: "s",
        descripcion: "Solo una prueba",
        precio: '$1,000',
        inventario: 2,
        imagen: "",
        imagen2: "",
        imagen3: ""
    },
    {
        id: 4,
        nombre: "s",
        descripcion: "Solo una prueba",
        precio: '$1,000',
        inventario: 2,
        imagen: "https://picsum.photos/900",
        imagen2: "",
        imagen3: ""
    },
    {
        id: 5,
        nombre: "s",
        descripcion: "Solo una prueba",
        precio: '$1,000',
        inventario: 2,
        imagen: "https://picsum.photos/1000",
        imagen2: "",
        imagen3: ""
    },
    {
        id: 6,
        nombre: "s",
        descripcion: "Solo una prueba",
        precio: '$1,000',
        inventario: 2,
        imagen: "https://picsum.photos/400",
        imagen2: "",
        imagen3: ""
    },
]

const SHEETY_API = 'https://api.sheety.co/a7ff2e700cac66745b92a39e8840a60b/onlineStoreExample/inventario';
const SHEETBEST_API = 'https://sheet.best/api/sheets/5a3fbcf0-8ee0-4e62-b189-70e8876846cc';
const SHEETBEST_API_SHARED = 'https://sheet.best/api/sheets/59a48816-efa2-440c-a1b8-8749a3b9cf8b';
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
function buildProductCard(product) {
    if (product.inventario > 0) {
        if (!product.imagen) product.imagen = './placeholder-image.png'

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
        p1.innerHTML = product.precio;
        p2.innerHTML = product.descripcion;
        img.setAttribute("src", product.imagen);
        card.setAttribute("class", "card mb-4 mx-4");
        img.setAttribute("class", "card-img-top");
        cardBody.setAttribute("class", "card-body");
        h5.setAttribute("class", "card-title");
        p1.setAttribute("class", "card-text text-primary font-weight-bold");
        p2.setAttribute("class", "card-text");
    }
};

// Executes data fetch and executes buildCardProduct function for each product
fetchData(SHEETBEST_API_SHARED).then(productos => {
    productos.forEach(product => {
        buildProductCard(product)
    });
})