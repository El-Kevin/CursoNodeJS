'use strict'
var formulario = document.querySelector("#formPeliculas");

formulario.addEventListener('submit', () => {
    console.log("entra")
    var peli = document.querySelector("#addpelicula").value
    localStorage.setItem(peli, peli)
});