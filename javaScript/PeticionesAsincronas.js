'use strict'
//fectch(es un sustituto de ajax) y peticiones a servicios rest
fetch("https://jsonplaceholder.ir/users")
.then(data => data.json())
.then(data => {
    //logica de negosio

})

var div_usuarios = document.querySelector("#usuarios");
var div_user01 = document.querySelector("#div_user01");

 //accede a un servicio remoto
 getUsuarios() 
    .then(response => response.json()) // recoge datos y lo convierte a json  //cuando re
    .then( users => {
    listadoUsuarios(users);
    return getUsuario01()
  })
    .then(unser01 => unser01.json())
    .then(user001 =>{
        console.log(user001)
        mostrarUser01(user001);
        
    })

  // response >= response.json() es lo mismo que:
  //  function(response){
  //      return response.json()}  https://jsonplaceholder.ir/users

  function getUsuarios(){
        return fetch('https://jsonplaceholder.ir/users');
  }

  function getUsuario01(){
    return fetch('https://jsonplaceholder.ir/users/1');
}

  function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');
        nombre.innerHTML = i + user.name
        div_usuarios.appendChild(nombre);
        document.querySelector(".loading").style.display = 'none';
    });
  }

  function mostrarUser01(user){
    console.log(user.name);
        let nombre01 = document.createElement('h3');
        nombre01.innerHTML = user.username;
        div_user01.appendChild(nombre01);
        document.querySelector(".loading01").style.display = 'none';

  }



  