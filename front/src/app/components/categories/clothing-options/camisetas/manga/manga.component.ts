import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent  {

  @Input() modelo: string = ''; 
  @Output() modeloChange = new EventEmitter<string>();
  
    opciones = ['Larga', 'Media', 'Corta', 'Tirantes'];
  
    actualizarSeleccion(event: Event) {
      this.modelo = (event.target as HTMLSelectElement).value;
      this.modeloChange.emit(this.modelo);
    }

}
