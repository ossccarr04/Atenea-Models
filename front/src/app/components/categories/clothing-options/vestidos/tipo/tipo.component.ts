import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent{

   @Input() modelo: string = ''; 
    @Output() modeloChange = new EventEmitter<string>();
  
    opciones = ['Ajustado', 'Con vuelo'];
  
    actualizarSeleccion(event: Event) {
      this.modelo = (event.target as HTMLSelectElement).value;
      this.modeloChange.emit(this.modelo);
    }

}
