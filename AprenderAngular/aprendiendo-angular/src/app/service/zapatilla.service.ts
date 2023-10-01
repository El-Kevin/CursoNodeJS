import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>
    constructor(){
        this.zapatillas = [
            new Zapatilla('Rebook Classic', 'Rebook', 80,'blanco', true),
            new Zapatilla('Nike', 'Nike', 50,'negras', false),
            new Zapatilla('Nike', 'Nike', 50,'negras', true),
            new Zapatilla('Nike', 'Nike', 50,'negras', true),
            new Zapatilla('Addidas', 'Adidas', 180,'gris', false)
        ];
    }

    getTexto(){
        return "Hola Mundo desde un servicio"
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas
    }

}