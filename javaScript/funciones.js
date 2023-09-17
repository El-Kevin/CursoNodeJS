'use strict'

//Funciones
 function saludo (){
    return "Hola soy Kevin Xavier"
 }

 console.log(saludo());

 //Funcion con parametros
 function saludo (nombre1, nombre2){
    return "Hola soy"+ nombre1 + "y " + nombre2 + "tambien esta aqui" 
 }
 console.log(saludo());

 //funciones con parametros opcionales

 function saludo2 (nombre1, nombre2 = 'Xavier'){
   return "Hola soy "+ nombre1 + " y " + nombre2 + " tambien esta aqui" 
}
console.log(saludo2());
document.write(saludo2('Kevin'))

//parametros rest y spread

function frutas(fruta1,fruta2,...resto_de_frutas){
   console.log(fruta1,fruta2,resto_de_frutas);
}
frutas("manzana", "peras", "naranja", "sandia", "frutilla");

var fruta = ["Naranja", "Manzana"];
frutas( ...fruta,  "peras", "naranja", "sandia", "frutilla");

//Funciones anonimas y callbacks
//Funcionn anonima
//Es una funcion que no tiene nombre
var pelicula = function(nombre){ // la funcion anonima tiene el nombre de pelicula
   return "La pelicula es: " + nombre;
}
//Funcion callback

function sumame (numero1, numero2, sumaYMuestra, sumaPorDos){
   var sumar = numero1 + numero2;
   sumaYMuestra(sumar);
   sumaPorDos(sumar);
   return sumar;
}

sumame(1,5,function(dato){
   console.log("la suma es: ", dato);

}, function(dato){
  console.log("La suma por dos es: ", (dato*2)); 
})

//Funcion de FLECHA

sumame(1,5,(dato) => {
   console.log("la suma es: ", dato);

}, (dato) => {
  console.log("La suma por dos es: ", (dato*2)); 
})



