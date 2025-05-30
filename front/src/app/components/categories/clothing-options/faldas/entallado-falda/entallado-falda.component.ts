import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-entallado-falda',
  templateUrl: './entallado-falda.component.html',
  styleUrls: ['./entallado-falda.component.css']
})
export class EntalladoFaldaComponent {

  
    @Input() modelo: string = '';
    @Output() modeloChange = new EventEmitter<string>();
  
    opciones = ['Evase', 'Recta', 'Ajustada'];
  
    actualizarSeleccion(event: Event) {
      this.modelo = (event.target as HTMLSelectElement).value;
      this.modeloChange.emit(this.modelo);
    }

}
