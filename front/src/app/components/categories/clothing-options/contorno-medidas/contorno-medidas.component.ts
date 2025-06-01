import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-contorno-medidas',
  templateUrl: './contorno-medidas.component.html',
  styleUrls: ['./contorno-medidas.component.css']
})
export class ContornoMedidasComponent {


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
      this.opciones = ['38 (XS)', '40 (S)', '42 (M)', '44 (L)', '46 (XL)', '48 (XXL)'];
    } else {
      this.opciones = ['XS', 'S', 'M', 'L', 'XL'];
    }
  }

  actualizarSeleccion(event: Event) {
    this.modelo = (event.target as HTMLSelectElement).value;
    this.modeloChange.emit(this.modelo);
  }
}
