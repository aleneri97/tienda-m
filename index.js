/*
 * @Author: aleneri97 
 * @Date: 2021-06-19 18:12:25 
 * @Last Modified by: aleneri97
 * @Last Modified time: 2021-06-17 10:25:40
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
function buildProductCard(product, carousel) {
    if (product.inventario > 0) {
        if (!product.imagen) product.imagen = './placeholder-image.png'

        // Create elements needed to build a card
        const card = document.createElement("div");
        const img = document.createElement("img");
        const cardBody = document.createElement("div");
        const h5 = document.createElement("h5");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const button = document.createElement("button");
        const pic1 = document.getElementById("pic1");
        const pic2 = document.getElementById("pic2");
        const pic3 = document.getElementById("pic3");
        const pic4 = document.getElementById("pic4");

        // Append newly created elements into the DOM
        const body = document.getElementById('content');
        body.append(card);
        card.append(img);
        card.append(cardBody);
        cardBody.append(h5);
        cardBody.append(p1);
        cardBody.append(p2);
        cardBody.append(button);
        // Set content and attributes
        h5.innerHTML = product.nombre;
        p1.innerHTML = product.precio;
        p2.innerHTML = product.descripcion;
        button.innerHTML = 'Ver Fotos'
        img.setAttribute("src", product.imagen);
        card.setAttribute("class", "card mb-4 mx-4");
        img.setAttribute("class", "card-img-top");
        cardBody.setAttribute("class", "card-body");
        h5.setAttribute("class", "card-title");
        p1.setAttribute("class", "card-text text-primary font-weight-bold");
        p2.setAttribute("class", "card-text");
        button.setAttribute("class", "btn btn-primary");
        button.setAttribute("type", "button");
        button.setAttribute("data-bs-toggle", "modal");
        button.setAttribute("data-bs-target", "#exampleModal");
        button.onclick = function () {
            carousel.to(0);
            product.imagen2 = !product.imagen2 ? (product.tipo == 'reloj' ? './placeholder-watch-image.png' : './placeholder-image.png') : product.imagen2
            product.imagen3 = !product.imagen3 ? (product.tipo == 'reloj' ? './placeholder-watch-image.png' : './placeholder-image.png') : product.imagen3
            product.imagen4 = !product.imagen4 ? (product.tipo == 'reloj' ? './placeholder-watch-image.png' : './placeholder-image.png') : product.imagen4
            pic1.setAttribute("src", product.imagen);
            pic2.setAttribute("src", product.imagen2);
            pic3.setAttribute("src", product.imagen3);
            pic4.setAttribute("src", product.imagen4);
        };

    }
};

const myCarousel = document.querySelector('#carouselExampleIndicators')
const carousel = new bootstrap.Carousel(myCarousel)

// Executes data fetch and executes buildCardProduct function for each product
fetchData(SHEETBEST_API_SHARED).then(productos => {
    productos.forEach(product => {
        buildProductCard(product, carousel)
    });
})