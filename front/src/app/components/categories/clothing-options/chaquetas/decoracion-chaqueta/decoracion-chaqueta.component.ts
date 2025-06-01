import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-decoracion-chaqueta',
  templateUrl: './decoracion-chaqueta.component.html',
  styleUrls: ['./decoracion-chaqueta.component.css']
})
export class DecoracionChaquetaComponent {

  @Input() modelo: string = '';
    @Output() modeloChange = new EventEmitter<string>();
  
    opciones = ['Sin decoracion','Logo frontal'];
  
    actualizarSeleccion(event: Event) {
      this.modelo = (event.target as HTMLSelectElement).value;
      this.modeloChange.emit(this.modelo);
    }

}
