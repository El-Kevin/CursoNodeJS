//hace que mi programacion sea mas estricta un ejemplo claro es que sin el strict puedo
// pais = "Ecuador" sin definir el tipo de variable

'use strict'

/*
        COMENTARIOS
 alert ("Hola mundo") 
 console.log("Hola mundo")
 */

// VARIABLE
// Una variable es un contenedor de información
// var -> puedo ir modificando el valor de la variable
// define una variable local o global sin importar el tamaño del bloque
var pais = "Ecuador";
var continente = "Latam";
var antiguedad = 2023;
var pais_y_continente = pais + ' ' + continente;
console.log(pais, continente, antiguedad);
//alert(pais_y_continente);

//------------------------------------------

pais = "Mexico";
var pais_y_continente = pais + ' ' + continente;
console.log(pais, continente, antiguedad);
//alert(pais_y_continente);

// let -> es tipica de typescript y permite definir una variable limitando 
//su alcance va acorte al bloque, declaracion o  expresion en el que se esta usando

let prueba = "Hols";


//Diferencia entre let y var es su alcance, a continuacion se presentan ejemplos:
 var numero = 40;
 console.log(numero) // valor 40
if(true){
    var numero = 50;
    console.log(numero); // valor 50
}
console.log(numero); // valor 50

var texto = "Curso JS";
console.log(texto); //valor ""
if (true){
    let texto = "Curso Laravel 5"; // crea una variable nueva
    console.log(texto);
}
console.log(texto); "valor = JS";

//Constantes.- es una variable pero su valor no puede cambiar
var web = "http://holamundo.es";
const ip = "192.1.1.1";

web = "este es el valor actual de la variable web"
//const ip = "1.1.1.1"
// tengo un error en la varable ip, por que quiero cambiarle el valor
console.log(web, ip)

