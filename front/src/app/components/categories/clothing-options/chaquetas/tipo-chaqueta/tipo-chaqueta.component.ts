import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tipo-chaqueta',
  templateUrl: './tipo-chaqueta.component.html',
  styleUrls: ['./tipo-chaqueta.component.css']
})
export class TipoChaquetaComponent {

  @Input() modelo: string = ''; 
      @Output() modeloChange = new EventEmitter<string>();
      
        opciones = ['Normal', 'Ajustada', 'Oversize'];
      
        actualizarSeleccion(event: Event) {
          this.modelo = (event.target as HTMLSelectElement).value;
          this.modeloChange.emit(this.modelo);
        }

}
