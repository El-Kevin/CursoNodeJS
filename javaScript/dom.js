'use strict'

function cambiarColor (color){
    caja.style.color = color
}
//DOM -> Document Object Model

// Identificar elementos por su id
var caja = document.getElementById("micaja")
//queryselector
var caja1 = document.querySelector("#micaja")
console.log(caja)

// identificar elementos por su etiqueta
var todos_los_divs = document.getElementsByTagName('div')

var valor;
for (valor in todosLosDivs){
    console.log(todos_los_divs[valor]);
    var parrafo = document.createElement("p")
    var texto = document.createTextNode(todos_los_divs[valor].textContent)
    parrafo.append(texto);
    document.querySelector("#miseccion").appendChild(parrafo)
}
//identificar elementos por su clase css


//colocar texto dentro
caja.innerHTML = "Yo soy el JavaScript"
caja.style.background = "red"
caja.style.padding = "20px"
caja.style.color = "white"
