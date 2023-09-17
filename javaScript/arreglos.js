'use strict'
//Arrays, Arreglos, Matrices

var nombre = "Kevin Toasa";
var nombres = ["Kevin", "Xavier", "Saw", 52 , true];
var lenguajes = new Array("PHP", "JAVA", "GO", "JAVA");
//console.log(nombres);
//console.log(lenguajes);

var elemento = parseInt(prompt("Que elemento quieres añadir", 0));
if (elemento >= nombre.length){
    alert("Introduce el numero correcto menor que "+ nombre.length);
}else{
    alert("El usuario es "+ nombre[elemento]);
}

//ForEach

document.write("<h1>Lenguajes de programación del 2018 </h1>");
document.write("<ul>");
lenguajes.forEach(
    (elemento, indice, arr)=>{
        console.log(arr);
        console.log(indice);
        document.write("<li>"+elemento+"</li>");
});

for (let elemento in lenguajes){
    document.write("<li>"+lenguajes[elemento]+"</li>");
}

document.write("</ul>");

//Array multidimensiones
var categorias = ["comendia", "terror", "aventura"];
var pelicula = ["IT", "Somos niños", "Nose"];
var cine = [categorias, pelicula];
console.log(cine);
console.log(cine[0][1]);
//Para añadir un elemento a un array "push()"
pelicula.push("Batman");
console.log(pelicula);

//Eliminar el ultimo elemento de un array "pop()"
pelicula.pop()
console.log(pelicula);
//Eliminar un elemento especifico

var indice = pelicula.indexOf("Nose")
if (indice>-1){
    pelicula.splice(indice,1)
}
console.log(pelicula)

//Para ordenar un array ".sort" y ".reverse"
pelicula.sort();
console.log(pelicula)

//Busquedas "find", "findIndex", .some()
var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP"
});
console.log(busqueda)

/*
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP"
);
console.log(busqueda)
*/