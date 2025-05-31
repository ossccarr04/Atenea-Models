import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent{

  @Input() codigo!: string;
  @Input() entallado!: string;
  @Input() tipo!: string;
  @Input() manga!: string;
  @Input() cuello!: string;
  @Input() largo!: string;
  @Input() precio!: number;



  descargarFactura() {
    const facturaElement = document.getElementById('facturaPDF'); // Elemento a capturar como PDF

    if (facturaElement) {
      html2canvas(facturaElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();

        const imgWidth = 190;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);

        pdf.save(`Factura-${this.codigo}.pdf`);
      });
    }
  }

}
