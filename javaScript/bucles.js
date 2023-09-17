'use strict'
//BUCLe.- es una estructura de control que se ejecuta un numero definido de veces
 
var numero = 100;
for (var i = 0 ; i <= numero; i++){
    console.log('vamos por el numero: '+ i);
    //debugger; -> puedo ver que pasa con la variable
}

// bucle While -> mientras pase esto ejecut mi bloque de codigo
 var year = 2018;
while(year <= 2051){
    console.log('Estamos en el año: '+ year);
    year++;
    // year--; -> decrementa 
}

//Do-While
var years = 20
do{
    alert("Solo cuando sea diferente")
    year = 20
    // si quiero forzarle a para uso break;
}while(year != 20)