'use strict'

// Condiconal if
var edad1 = 18;
var edad2 = 12;
var nombre = 'Kevin Xavier';
if(edad1 > 18){
    console.log("edad1 es mayor a edad2");
}else{
    console.log("edad2 es menor que edad1");
}

if(edad1 >= 18){
    console.log(nombre+ 'tiene' + edad1 + "es mayor de edad");
}else{
    console.log("es menor de edad " + nombre);
}

//Operadores logicos

var year = 2015;
//Negacion
if (year =! 2016){
    console.log("es diferente a 2016")
}
//And
if (year =! 2016 && edad1 == 18){
    console.log("es diferente a 2016 y edad es igual a 18");
}
//or
if(year = 2015 || (year =! 2016 && edad1 == 18) ){
    console.log("puede que el año sea 2015 o (sea diferente a 2016 y edad es igual a 18)");
}

//SWITCJ

var edad = 1;
var imprime = "";

switch(edad){
    
    case 18: 
        imprime = "Acabas de cumplir la mayoria de edad";
    break;
    
    case 40: 
        imprime = "tienes 40";
    break;
    
    default:
        imprime = "nose tu edad"
    break;
}
console.log(imprime)




