import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-largo-chaqueta',
  templateUrl: './largo-chaqueta.component.html',
  styleUrls: ['./largo-chaqueta.component.css']
})
export class LargoChaquetaComponent {

    @Input() modelo: string = ''; 
    @Output() modeloChange = new EventEmitter<string>();
    
      opciones = ['Larga', 'Media', 'Corta'];
    
      actualizarSeleccion(event: Event) {
        this.modelo = (event.target as HTMLSelectElement).value;
        this.modeloChange.emit(this.modelo);
      }

}
