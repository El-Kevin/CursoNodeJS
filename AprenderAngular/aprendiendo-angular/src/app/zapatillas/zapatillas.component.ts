import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../service/zapatilla.service";
@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public mi_marca: string;

    constructor(
        private _zapatillaService: ZapatillaService
    ){
        this.mi_marca = "";
        this.color = 'blue';
        this.marcas = new Array();
        this.zapatillas = this._zapatillaService.getZapatillas();
    }
    ngOnInit(): void {
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

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca)
    }
    borrarMarca(index: number){
        //delete this.marcas[index];
        this.marcas.splice(index, 1);
    }
    onBlur(){
        console.log("ha salido del input");
    }
    mostrarPalabra(){
        this.mi_marca;
    }
}