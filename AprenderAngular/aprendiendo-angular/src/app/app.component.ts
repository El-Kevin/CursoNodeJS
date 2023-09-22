import { Component } from '@angular/core'; //son mudulos y objetos que se van a usar
import { Configuracion } from './models/configuracion';

//Decorador: Aqui configuro mi componente
@Component({
  selector: 'app-root', //indico la etiqueta o directiva se carga el componente, que se encuentra en el index.html
  templateUrl: './app.component.html', // indicar cual es la vista del componente
  styleUrls: ['./app.component.css'] // se adjunta un estilo CSS
})
export class AppComponent { //El export es para utilizar esa clase en otros archivos
  public title = 'aprendiendo-angular';
  public mostrar_videojuego: boolean = true;
  public descripcion: string;
  public config;
  constructor(){
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

  ocultarVideojuegos(value:boolean){
    this.mostrar_videojuego = value;
    console.log(this.mostrar_videojuego)
  }
}
