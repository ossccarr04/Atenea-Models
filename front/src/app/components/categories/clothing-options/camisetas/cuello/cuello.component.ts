import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cuello',
  templateUrl: './cuello.component.html',
  styleUrls: ['./cuello.component.css']
})
export class CuelloComponent{

  @Input() modelo: string = ''; 
  @Output() modeloChange = new EventEmitter<string>();
  
    opciones = ['Pico', 'Redondo'];
  
    actualizarSeleccion(event: Event) {
      this.modelo = (event.target as HTMLSelectElement).value;
      this.modeloChange.emit(this.modelo);
    }
}
