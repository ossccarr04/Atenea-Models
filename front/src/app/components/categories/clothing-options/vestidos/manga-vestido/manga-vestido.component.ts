import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-manga-vestido',
  templateUrl: './manga-vestido.component.html',
  styleUrls: ['./manga-vestido.component.css']
})
export class MangaVestidoComponent  {

   @Input() modelo: string = ''; 
    @Output() modeloChange = new EventEmitter<string>();
    
      opciones = ['Larga', 'Media', 'Corta','Sin mangas'];
    
      actualizarSeleccion(event: Event) {
        this.modelo = (event.target as HTMLSelectElement).value;
        this.modeloChange.emit(this.modelo);
      }

}
