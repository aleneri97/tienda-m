// TODO: Manejar timeout con promesas
// TODO: Ocultar URL
// TODO: Subir repo
// TODO: Hacer Github Pages
// TODO: Generar QR

let url = 'https://api.sheety.co/a7ff2e700cac66745b92a39e8840a60b/onlineStoreExample/inventario';
let inventario;
fetch(url)
    .then((response) => response.json())
    .then(json => {
        inventario = json.inventario;
    });

setTimeout(() => inventario.forEach(product => buildProductCard(product)), 2000)

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const buildProductCard = product => {
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

