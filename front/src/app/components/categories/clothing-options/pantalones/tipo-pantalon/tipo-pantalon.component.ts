import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tipo-pantalon',
  templateUrl: './tipo-pantalon.component.html',
  styleUrls: ['./tipo-pantalon.component.css']
})
export class TipoPantalonComponent {

  @Input() modelo: string = ''; 
      @Output() modeloChange = new EventEmitter<string>();
    
      opciones = ['Ajustado', 'Ancho'];
    
      actualizarSeleccion(event: Event) {
        this.modelo = (event.target as HTMLSelectElement).value;
        this.modeloChange.emit(this.modelo);
      }

}
