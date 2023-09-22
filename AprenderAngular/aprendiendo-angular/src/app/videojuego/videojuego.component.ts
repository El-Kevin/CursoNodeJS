import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
//Decorador
@Component({
    //nombre de la etiqueta o directiva del componente
    selector: 'videojuego',
    //plantilla en linea
    templateUrl: './videojuego.component.html'
})

export class VideojuegosComponent implements OnInit, DoCheck, OnDestroy{
    //Puedo definir propiedades
    public titulo: string;
    public listado: string;
    constructor(){
        this.titulo = "Componente de videojuegos";
        this.listado = "Los juegos mas buenos";
        console.log("Se ha cargado el componente videojuego");
    }
    //Se ejecuta al cargarlo
    ngOnInit(): void {
        //console.log("Oninit Ejecutandose")
    }
    //Cada vex que se produce un cambio en el componente o en la aplicacion en angular
    //Recoger datos cuando haya un cambio, actualizar variables
    ngDoCheck(): void {
       // console.log("Do check ejecutandose")
    }
    //Se ejecuta algo antes de eliminar la instancia de un componente
    ngOnDestroy(){
        //console.log("On destroy ejecutado")
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo del componente"
    }

}