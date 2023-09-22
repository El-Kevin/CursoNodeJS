import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public mi_marca: string;

    constructor(){
        this.mi_marca = "";
        this.color = 'blue';
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Rebook Classic', 'Rebook', 80,'blanco', true),
            new Zapatilla('Nike', 'Nike', 50,'negras', false),
            new Zapatilla('Nike', 'Nike', 50,'negras', true),
            new Zapatilla('Nike', 'Nike', 50,'negras', true),
            new Zapatilla('Addidas', 'Adidas', 180,'gris', false)
        ];
    }
    ngOnInit(): void {
        console.log(this.zapatillas)
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) =>{
            if(this.marcas.indexOf(zapatilla.marca)<0){
            this.marcas.push(zapatilla.marca);
            }
            console.log(index);
        });
        console.log(this.marcas)
    }

}