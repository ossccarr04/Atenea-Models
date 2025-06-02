import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {

  @Input() codigo!: string;
  @Input() entallado!: string;
  @Input() tipo!: string;
  @Input() manga!: string;
  @Input() cuello!: string;
  @Input() largo!: string;
  @Input() precio!: number;
  @Input() decoracion!: string;
  @Input() sexo!: string;
  @Input() contorno_medidas!: string;
  @Input() largo_medidas!: string;
  @Input() sugerencias!: string;
  @Input() numeroModificaciones!: number;



  descargarFactura() {
    const facturaElement = document.getElementById('facturaPDF');

    if (facturaElement) {
      html2canvas(facturaElement, {
        scale: 2, // aumenta resolución para que se vea nítido
        useCORS: true,
      }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth(); // 210 mm
        const pageHeight = pdf.internal.pageSize.getHeight(); // 297 mm

        // Ajustar imagen a toda la página con márgenes (opcional)
        const margin = 10;
        const imgWidth = pageWidth - margin * 2;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Si el contenido es muy largo, lo forzamos a encajar
        const scaleFactor = (pageHeight - margin * 2) / imgHeight;

        const finalImgWidth = imgWidth;
        const finalImgHeight = imgHeight * scaleFactor;

        pdf.addImage(imgData, 'PNG', margin, margin, finalImgWidth, finalImgHeight);
        pdf.save(`Factura-${this.codigo}.pdf`);
      });
    }

  }

}
