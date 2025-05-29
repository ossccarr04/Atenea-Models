import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-largo-pantalon',
  templateUrl: './largo-pantalon.component.html',
  styleUrls: ['./largo-pantalon.component.css']
})
export class LargoPantalonComponent {

   @Input() modelo: string = '';
    @Output() modeloChange = new EventEmitter<string>();
  
    opciones = ['Largo', 'Pirata', 'Corto'];
  
    actualizarSeleccion(event: Event) {
      this.modelo = (event.target as HTMLSelectElement).value;
      this.modeloChange.emit(this.modelo);
    }

}
