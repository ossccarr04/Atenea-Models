import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-entallado',
  templateUrl: './entallado.component.html',
  styleUrls: ['./entallado.component.css']
})
export class EntalladoComponent {

  @Input() modelo: string = ''; 
  @Output() modeloChange = new EventEmitter<string>();

  opciones = ['Entallado', 'Sin entallar'];

  actualizarSeleccion(event: Event) {
    this.modelo = (event.target as HTMLSelectElement).value;
    this.modeloChange.emit(this.modelo);
  }
}


