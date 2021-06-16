/*
 * @Author: aleneri97 
 * @Date: 2021-06-19 18:12:25 
 * @Last Modified by: aleneri97
 * @Last Modified time: 2021-06-12 20:34:32
 */
// TODO: Ocultar URL

// Currency Format Entity
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

// Static dump data

  let productos = [
    {
      id: 1,
      nombre: "s",
      descripcion: "Solo una prueba",
      precio: 1000,
      inventario: 2,
      imagen1: "https://picsum.photos/400",
      imagen2: "https://picsum.photos/500",
      imagen3: ""
    },
    {
      id: 2,
      nombre: "s",
      descripcion: "Solo una prueba",
      precio: 1000,
      inventario: 2,
      imagen1: "https://picsum.photos/600",
      imagen2: "",
      imagen3: ""
    },
    {
      id: 3,
      nombre: "s",
      descripcion: "Solo una prueba",
      precio: 1000,
      inventario: 2,
      imagen1: "",
      imagen2: "",
      imagen3: ""
    },
    {
      id: 4,
      nombre: "s",
      descripcion: "Solo una prueba",
      precio: 1000,
      inventario: 2,
      imagen1: "https://picsum.photos/900",
      imagen2: "",
      imagen3: ""
    },
    {
      id: 5,
      nombre: "s",
      descripcion: "Solo una prueba",
      precio: 1000,
      inventario: 2,
      imagen1: "https://picsum.photos/1000",
      imagen2: "",
      imagen3: ""
    },
    {
      id: 6,
      nombre: "s",
      descripcion: "Solo una prueba",
      precio: 1000,
      inventario: 2,
      imagen1: "https://picsum.photos/400",
      imagen2: "",
      imagen3: ""
    },
  ]


/**
 * @description Function that manipulates DOM to create product nodes dynamically
 * @param {*} product: each product will be created like this
 */
function buildProductCard(product){
    if (product.inventario > 0 ) {
        if(!product.imagen1) product.imagen1 = './placeholder-image.png';
    
        // Create elements needed to build a card
        const card = document.createElement("div");
        const img = document.createElement("img");
        const cardBody = document.createElement("div");
        const h5 = document.createElement("h5");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        
        const button = document.createElement("button");
        const carouselBody = document.getElementById('carouselExampleIndicators');
        const carouselImageBody = document.getElementById('carouselImageContainer');
        const carouselIndex = document.getElementById('carouselIndex');
        // Append newly created elements into the DOM
        const body = document.getElementById('content');
        body.append(card);
            // card.append(img);
            buildCarousel(card);
            card.append(cardBody);
                cardBody.append(h5);
                cardBody.append(p1);
                cardBody.append(p2);
                cardBody.append(button);

        // Set content and attributes
        h5.innerHTML = product.nombre;
        p1.innerHTML = `${formatter.format(product.precio )}`;
        p2.innerHTML = product.descripcion;
        button.innerHTML = 'Ver Fotos'

        card.setAttribute("class", "card mb-4 mx-3");
        img.setAttribute("src", product.imagen1);
        img.setAttribute("class", "card-img-top");
        cardBody.setAttribute("class", "card-body");
        h5.setAttribute("class", "card-title");
        p1.setAttribute("class", "card-text");
        p2.setAttribute("class", "card-text");
        button.setAttribute("class", "btn btn-primary");
        button.setAttribute("type", "button");
        button.setAttribute("data-bs-toggle", "modal");
        button.setAttribute("data-bs-target", "#exampleModal");

        // buildCarouselCard(carouselImageBody, 'https://picsum.photos/400')
        
    }
};


function buildCarouselIndexElement(parent, active, position){
  const carouselIndex = document.createElement('button');
  carouselIndex.setAttribute("type", "button");
  carouselIndex.setAttribute("data-bs-target", "#carouselExampleIndicators");
  carouselIndex.setAttribute("data-bs-slide-to", position);
  carouselIndex.setAttribute("aria-label", `Slide ${position}`);
  if (active) {
    carouselIndex.setAttribute("aria-current", "true");
    carouselIndex.setAttribute("class", "active");
  }

}

// función que recibe la lista de productos, buscará el contenido de las imágenes y regresará este como arreglo.
function newImageArray(product){
  let imagesVars = [product.imagen1, product.imagen2, product.imagen3, product.imagen4, product.imagen5, product.imagen6, product.imagen7, product.imagen8, product.imagen9, product.imagen10];
  return imagesVars.filter(image => !!image);
}

function buildCarouselNavigationButtons(parent){
  console.log(`Entra`);
  
  const navBtnPrev = document.createElement('button');
  const navBtnNext = document.createElement('button');
  const navSpanIconPrev = document.createElement('span');
  const navSpanIconNext = document.createElement('span');
  const navSpanTextPrev = document.createElement('span');
  const navSpanTextNext = document.createElement('span');

  navSpanTextPrev.innerHTML= "Previous";
  navSpanTextNext.innerHTML= "Next";

  navBtnPrev.setAttribute("class", "carousel-control-prev");
  navBtnPrev.setAttribute("type", "button");
  navBtnPrev.setAttribute("data-bs-target", "#carouselExampleIndicators");
  navBtnPrev.setAttribute("data-bs-slide", "prev");

  navBtnNext.setAttribute("class", "carousel-control-next");
  navBtnNext.setAttribute("type", "button");
  navBtnNext.setAttribute("data-bs-target", "#carouselExampleIndicators");
  navBtnNext.setAttribute("data-bs-slide", "next");
  
  navSpanIconPrev.setAttribute("class", "carousel-control-prev-icon")
  navSpanIconPrev.setAttribute("aria-hidden", "true")
  navSpanTextPrev.setAttribute("class", "visually-hidden")
  
  navSpanIconNext.setAttribute("class", "carousel-control-next-icon")
  navSpanIconNext.setAttribute("aria-hidden", "true")
  navSpanTextNext.setAttribute("class", "visually-hidden")


  // parent navBtnPrev
  // navBtnPrev navSpanIconPrev
  // navBtnPrev navSpanTextPrev
  // parent navBtnNext
  // navBtnNext navSpanIconNext
  // navBtnNext navSpanTextNext

  navBtnPrev.append(navSpanIconPrev);
  navBtnPrev.append(navSpanTextPrev);
  navBtnNext.append(navSpanIconNext);
  navBtnNext.append(navSpanTextNext);
  parent.append(navBtnPrev);
  parent.append(navBtnNext);

  /*
  parent navBtnPrev <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      navBtnPrev navSpanIconPrev <span class="carousel-control-prev-icon" aria-hidden="true">
      navBtnPrev navSpanTextPrev <span class="visually-hidden">Previous
  parent navBtnNext <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      navBtnNext navSpanIconNext <span class="carousel-control-next-icon" aria-hidden="true">
      navBtnNext navSpanTextNext <span class="visually-hidden">Next
   */

}

function buildCarouselCard(parent, image, active = ''){
  const carouselDiv = document.createElement('div');
  const carouselImg = document.createElement('img');
  
  parent.append(carouselDiv);
  carouselDiv.append(carouselImg);

  carouselDiv.setAttribute("class", `carousel-item ${active}` );
  carouselDiv.setAttribute("data-bs-interval", "false");
  carouselImg.setAttribute("class", "d-block w-100");
  carouselImg.setAttribute("src", image);
}

function deleteCarouselBtns(){
  const prevBtn = document.getElementById('carouselControlPrev');
  const nextBtn = document.getElementById('carouselControlNext');
  const parent = document.getElementsByClassName('modal-header');
  if (!!prevBtn) {
    parent.removeChild(prevBtn);
  }

  if (!!nextBtn) {
    parent.removeChild(nextBtn);
  }
}

function buildCarousel(parent){
  const carouselContainer = document.createElement('div');
  const carouselButtons = document.createElement('div');
  const btnIndexPicture = document.createElement('button');
  const carouselPictures = document.createElement('div');
  const pictureContainer = document.createElement('div');
  const carouselPicture = document.createElement('img');
  const btnNavPrev = document.createElement('button');
  const btnNavNext = document.createElement('button');
  const iconNavPrev = document.createElement('span');
  const textNavPrev = document.createElement('span');
  const iconNavNext = document.createElement('span');
  const textNavNext = document.createElement('span');

  textNavPrev.innerHTML = "Previous";
  textNavNext.innerHTML = "Next";

  parent.append(carouselContainer);
    carouselContainer.append(carouselButtons);
      carouselButtons.append(btnIndexPicture);
      carouselButtons.append(btnIndexPicture);
    carouselContainer.append(carouselPictures);
      carouselPictures.append(pictureContainer);
        pictureContainer.append(carouselPicture);
      carouselPictures.append(pictureContainer);
        pictureContainer.append(carouselPicture);
    carouselContainer.append(btnNavPrev);
      btnNavPrev.append(iconNavPrev);
      btnNavPrev.append(textNavPrev);
    carouselContainer.append(btnNavNext);
      btnNavNext.append(iconNavNext);
      btnNavNext.append(textNavNext);


  carouselContainer.setAttribute("id", "carouselExampleIndicators");
  carouselContainer.setAttribute("class", "carousel slide");
  carouselContainer.setAttribute("data-bs-ride", "carousel");
  carouselButtons.setAttribute("class", "carousel-indicators");
  btnIndexPicture.setAttribute("type", "");
  btnIndexPicture.setAttribute("data-bs-target", "#carouselExampleIndicators");
  btnIndexPicture.setAttribute("data-bs-slide-to", "0");
  btnIndexPicture.setAttribute("class", "active");
  btnIndexPicture.setAttribute("aria-current", "true");
  btnIndexPicture.setAttribute("aria-label", "Slide 1");
  carouselPictures.setAttribute("class", "carousel-inner");
  pictureContainer.setAttribute("class", "carousel-item active");
  carouselPicture.setAttribute("src", "https://picsum.photos/400");
  carouselPicture.setAttribute("class", "d-block w-100");
  btnNavPrev.setAttribute("class", "carousel-control-prev");
  btnNavPrev.setAttribute("type", "button");
  btnNavPrev.setAttribute("data-bs-target", "#carouselExampleIndicator");
  btnNavPrev.setAttribute("data-bs-slide", "prev");
  iconNavPrev.setAttribute("class", "carousel-control-prev-icon");
  iconNavPrev.setAttribute("aria-hidden", "true");
  textNavPrev.setAttribute("class","visually-hidden");
  btnNavNext.setAttribute("class", "carousel-control-next");
  btnNavNext.setAttribute("type", "button");
  btnNavNext.setAttribute("data-bs-target", "#carouselExampleIndicator");
  btnNavNext.setAttribute("data-bs-slide", "next");
  iconNavNext.setAttribute("class", "carousel-control-next-icon");
  iconNavNext.setAttribute("aria-hidden", "true");
  textNavNext.setAttribute("class","visually-hidden");
}

function handleClickCard(){
  let imagesArray = newImageArray(product);
  let imagesArrayLength = imagesArray.length;
  buildCarouselCard(carouselImageBody, imagesArray.pop(), 'active');
  if(imagesArrayLength > 1){
    let i = 0;
    buildCarouselNavigationButtons(carouselBody);
    buildCarouselIndexElement(carouselIndex, true, i);
    imagesArray.forEach((image ,index) => {
      index++;
      console.log("creará índice") 
      buildCarouselIndexElement(carouselIndex, i);
      console.log("creará imagen") 
      buildCarouselCard(carouselImageBody, image);
    });
  }
  //Almacenar un arreglo con las imagenes
  //almacenar el número de imágenes
  // Si hay más de 1 foto activar botones de mover
  // por cada imágen, crea un botón y una imagen
}

// Executes data fetch and executes buildCardProduct function for each product
productos.forEach(product => {
    buildProductCard(product)
});

