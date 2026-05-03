//Array para guardar los productos
const productos = [
    {
        nombre: "Budas rosarios sabios",
        precio: 1,
        medida: "10x13cm",
        imagen: "/img/budarulo.jpg",
        categoria: "buda"
    },

    {
        nombre: "Buda con monedas",
        precio: 1,
        medida: "13x15cm",
        imagen: "/img/budaconmonedas.jpg",
        categoria: "buda"
    },

    {
        nombre: "Budas gordos sabios",
        precio: 1,
        medida: "12x12cm",
        imagen: "/img/budasgordossabios.jpg",
        categoria: "buda"
    },

    {
        nombre: "Buda bola mini porta sahumerio",
        precio: 1,
        medida: "8x8cm",
        imagen: "/img/budabola.jpg",
        categoria: "buda"

    },

    {
        nombre: "Sahumerio triple empaste",
        precio: 1500,
        medida : "x 10 unidades",
        imagen: "/img/limon.jpg",
        categoria: "sahumerio"
    }

];

// Trae el contenedor del HTML donde se van a mostrar los productos
const contenedor = document.getElementById("contenedor-productos")


// Detecta la categoría actual desde el body del HTML
const categoriaActual = document.body.dataset.categoria;

// Filtra los productos según la categoría actual
// Solo deja los que coincidan con la página en la que estás
const filtrados = productos.filter(p => p.categoria == categoriaActual);

// Recorre los productos filtrados y los muestra en pantalla
filtrados.forEach(producto => {
    // Agrega HTML dentro del contenedor
    contenedor.innerHTML += `
     <div class="producto">
     <img src="${producto.imagen}">
     <h3>${producto.nombre}</h3>
     <p>${producto.precio}</p>
     <p>${producto.medida}</p>
     <button onclick="consultar ('${producto.nombre}')">
        Consultar
        </button>
        </div>
 `;
});

// Función que se ejecuta al hacer clic en "Consultar"
function consultar(nombre) {
    // Mensaje que se va a enviar por WhatsApp
    const mensaje = `Hola! 😊 Estoy interesado/a en: ${nombre}`;
    const numero = "5492257409774";

    // Crea la URL de WhatsApp con el mensaje incluido
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    // Abre WhatsApp en una nueva pestaña
    window.open(url, "_blank");
}