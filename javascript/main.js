// Efecto del menú hamburguesa
const toggle = document.querySelector(".nav_toggle");
const menu = document.querySelector(".nav ul");


toggle.addEventListener("click" , () => {

    // abre y cierra el menú 
    menu.classList.toggle("open");

    //cambia el icono hamburguesa a X
    toggle.classList.toggle("active");
});

//Efecto para mover el carrusel de fotos
const slide = document.getElementById("slide");

document.querySelector(".next").addEventListener("click", () => {
    slide.scrollBy({ left: 800, behavior: "smooth" });
});

document.querySelector(".prev").addEventListener("click", () => {
    slide.scrollBy({ left: -800, behavior: "smooth" });
});