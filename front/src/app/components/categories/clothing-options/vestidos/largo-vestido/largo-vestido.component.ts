import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-largo-vestido',
  templateUrl: './largo-vestido.component.html',
  styleUrls: ['./largo-vestido.component.css']
})
export class LargoVestidoComponent{

  @Input() modelo: string = '';
  @Output() modeloChange = new EventEmitter<string>();

  opciones = ['Largo', 'Medio (Por las rodillas)', 'Corto'];

  actualizarSeleccion(event: Event) {
    this.modelo = (event.target as HTMLSelectElement).value;
    this.modeloChange.emit(this.modelo);
  }

}
