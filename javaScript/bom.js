'use strict'
//bom ->  Browser Object Model
function getBom(){
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.location);
}
getBom();

function getBomScreen(){
    console.log(screen.Height);
    console.log(screenWidth);
    }
    getBomScreen();
// funcion para redireccionar

function redirect(url){
    window.location.href = url
}

function abrirVentana(url){
    windo.open(url)
}