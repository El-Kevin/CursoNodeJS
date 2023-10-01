import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform{
    //dato | calculadora: 'dato'
    //parametro 1 | parametro 2
    transform(value: any, valuetwo: any) {
        let operaciones = `
        suma: ${value+valuetwo} -
        Resta: ${value-valuetwo} -
        Multiplicacion: ${value*valuetwo} -
        Division:  ${value / valuetwo} 
        `;
        return operaciones;
    }
}