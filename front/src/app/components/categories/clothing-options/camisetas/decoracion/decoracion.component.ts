import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-decoracion',
  templateUrl: './decoracion.component.html',
  styleUrls: ['./decoracion.component.css']
})
export class DecoracionComponent {

  @Input() modelo: string = '';
  @Output() modeloChange = new EventEmitter<string>();

  opciones = ['Sin decoracion','Logo frontal', 'Logo espalda'];

  actualizarSeleccion(event: Event) {
    this.modelo = (event.target as HTMLSelectElement).value;
    this.modeloChange.emit(this.modelo);
  }

}
