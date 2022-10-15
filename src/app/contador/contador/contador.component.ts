
import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>

        <h3>La base es <strong>{{base}}</strong></h3>

        <button (click)="acumular(-base)"> - </button>
        <span> {{numero}} </span>
        <button (click)="acumular(+base)"> + </button>
    `
})

export class ContadorComponent {
    title = 'Contador App';
    public base: number = 5;
    public numero: number = 0;
  
    acumular(valor: number){
      this.numero += valor;
    }
}