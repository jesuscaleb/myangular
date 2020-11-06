import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'espar'
})

export class EsParPipe implements PipeTransform{
    /**
     * Cuando se usa PipeTransform es obligatorio usar la función transform.
     * @param value : Resulta ser el valor al que se esta aplicado en pipe
     * Como ejemplo: Se realiza una pipe personalizada para validar si un número es par.
     */
    transform(value: any){
        var espar = "no es par";
        if (value % 2 == 0) {
            espar =  "es un número par";
        }

        return "El número es: " + value + " y " + espar;
    }
}