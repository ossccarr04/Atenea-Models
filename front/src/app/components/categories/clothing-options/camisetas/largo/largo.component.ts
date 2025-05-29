import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-largo',
  templateUrl: './largo.component.html',
  styleUrls: ['./largo.component.css']
})
export class LargoComponent{

    @Input() modelo: string = ''; 
    @Output() modeloChange = new EventEmitter<string>();
  
    opciones = ['Cadera', 'Cintura', 'Normal'];
  
    actualizarSeleccion(event: Event) {
      this.modelo = (event.target as HTMLSelectElement).value;
      this.modeloChange.emit(this.modelo);
    }

}
