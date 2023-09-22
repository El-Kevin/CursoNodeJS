'use strict'
//eventos del mouse
window.addEventListener('load', () => {



 function cambiarColor(){
    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background= "red";
        console.log("hola")
    }else{
        boton.style.background = "green";
        console.log("hola")
    }
    return true;
}

var boton = document.querySelector("#boton");

boton.addEventListener('click', function(){
    cambiarColor();
});

// mouse over

boton.addEventListener('mouseover', () =>{
    boton.style.background = "#ccc"
});

//mouse out
boton.addEventListener('mouseout', () => {
    boton.style.background = "yellow"
});


//-----------------------------------------------
//EVENTOS TECLADO

var input = document.querySelector("#campo_nombre")
//Focus: cuando entro al campo
input.addEventListener('focus', () => {
    console.log("evento focus");
});

//Blur: cuando salgo del campo
input.addEventListener('blur', () => {
    console.log("evento blur");
});

//Keydown
input.addEventListener('keydown', () => {
    console.log("estas pulsando esta tecla", String.fromCharCode(event.keyCode));
});
//keypress
input.addEventListener('keypress', () => {
    console.log("tecla presionada", String.fromCharCode(event.keyCode));
});

//keyup
input.addEventListener('keyup', () => {
    console.log("tecla soltada", String.fromCharCode(event.keyCode));
});


// Timers
// se ejecuta varias veces
var tiempo = setInterval(()=>
{
    console.log("Set interval ejecutandose")
}, 3000);
    // se ejecuta solo una vex
    var tiempo = setTimeout(()=>
    {
        console.log("Set timeout ejecutandose")
    }, 3000);
});
// para parar el intervalo en bucle se usa el clearInterval(tiempo)

