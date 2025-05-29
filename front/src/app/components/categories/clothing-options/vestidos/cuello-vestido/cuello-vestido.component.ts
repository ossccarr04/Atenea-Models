import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cuello-vestido',
  templateUrl: './cuello-vestido.component.html',
  styleUrls: ['./cuello-vestido.component.css']
})
export class CuelloVestidoComponent{

  @Input() modelo: string = ''; 
  @Output() modeloChange = new EventEmitter<string>();
  
    opciones = ['Pico', 'Redondo','Cuadrado'];
  
    actualizarSeleccion(event: Event) {
      this.modelo = (event.target as HTMLSelectElement).value;
      this.modeloChange.emit(this.modelo);
    }
}
