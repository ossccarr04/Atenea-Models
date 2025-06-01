import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-largo-medidas',
  templateUrl: './largo-medidas.component.html',
  styleUrls: ['./largo-medidas.component.css']
})
export class LargoMedidasComponent {


  @Input() modelo: string = '';
  @Input() sexo: string = 'Hombre'; // Por defecto, se asume 'Hombre'
  @Output() modeloChange = new EventEmitter<string>();

  opciones: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['sexo']) {
      this.actualizarOpciones();
    }
  }

  actualizarOpciones() {
    if (this.sexo === 'Hombre') {
      this.opciones = ['38', '40', '42', '44', '46', '48'];
    }
    this.opciones = ['XS', 'S', 'M', 'L', 'XL'];
  }

  actualizarSeleccion(event: Event) {
    this.modelo = (event.target as HTMLSelectElement).value;
    this.modeloChange.emit(this.modelo);
  }

}
