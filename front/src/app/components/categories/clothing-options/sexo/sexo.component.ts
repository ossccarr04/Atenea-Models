import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sexo',
  templateUrl: './sexo.component.html',
  styleUrls: ['./sexo.component.css']
})
export class SexoComponent {

  
    @Input() modelo: string = ''; 
    @Output() modeloChange = new EventEmitter<string>();
    
      opciones = ['Hombre', 'Mujer'];
    
      actualizarSeleccion(event: Event) {
        this.modelo = (event.target as HTMLSelectElement).value;
        this.modeloChange.emit(this.modelo);
      }

}
