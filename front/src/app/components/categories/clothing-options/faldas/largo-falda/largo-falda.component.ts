import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-largo-falda',
  templateUrl: './largo-falda.component.html',
  styleUrls: ['./largo-falda.component.css']
})
export class LargoFaldaComponent {

  @Input() modelo: string = '';
  @Output() modeloChange = new EventEmitter<string>();

  opciones = ['Larga', 'Media', 'Corta'];

  actualizarSeleccion(event: Event) {
    this.modelo = (event.target as HTMLSelectElement).value;
    this.modeloChange.emit(this.modelo);
  }

}
