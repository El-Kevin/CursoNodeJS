'use strict'
//JSON
var pelicula = {
    titulo: 'Batman',
    year: 2017,
    pais: 'Estados Unidos'
};
var peliculas = [{
    titulo: 'Melagodon',
    year: 2017,
    pais: 'Ecuador'
}, pelicula];

console.log(peliculas)
var caja_peliculas = document.querySelector("#Peliculas")
var index;
for(index in peliculas){
    var p = document.createElement("p")
    p.append(peliculas[index].titulo + " - "+ peliculas[index].year);
    caja_peliculas.append(p)
}