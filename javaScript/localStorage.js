'use strict'
//Local Storage
//La informacion persiste a lo largo de la navegacion web, como una sesion(backend) el local storage se guarda en el navegador

if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage disponible");
}else{
    console.log("LocalStorage no disponible");
}
//Guardar datos
localStorage.setItem("titulo", "Curso de JavaScript");
//Recuperar elemento
document.querySelector("#Peliculas").innerHTML= localStorage.getItem("titulo");
//Guardar objectos
var usuario = {
    nombre: "Kevin",
    apellido: "Toasa"
};
// combierto un json a json string para que pueda enviarse
localStorage.setItem("usuario", JSON.stringify(usuario));
//Recuperar un objeto (lo combierto a un JSON)
var user = JSON.parse(localStorage.getItem("usuario"));
console.log(user)
document.querySelector("#Peliculas").append(" "+user.nombre+" ")
//Borrar elementos 
localStorage.removeItem("usuario")
