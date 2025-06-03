import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { FileUploadService } from 'src/app/file-upload.service';  

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.css']
})
export class OtrosComponent {

  selectedFile: File | null = null;
  userEmail: string = '';  // Variable para el correo
  imagePreview: string | ArrayBuffer | null = null;
  showPopup: boolean = false;
  popupMessage: string = '';

  precio: number = 7.85; // Precio base de la camiseta
  precioTotal:number = 0;
  numeroModificaciones: number = 0;
  sugerencias: string = '';
  
  constructor(private fileUploadService: FileUploadService) {}


  onEmailChange(event: any) {
    this.userEmail = event.target.value;
  }

  // Método para seleccionar archivo
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => this.imagePreview = reader.result;
      reader.readAsDataURL(file);
    }
  }

  updatePrecio() {
    this.precioTotal = Number((this.precio * this.numeroModificaciones).toFixed(2));
  }


  // Método para enviar el correo
  async onSendEmail() {
    if (!this.selectedFile || !this.userEmail) return;

    try {
      const carac=[this.codigoCamiseta,this.sugerencias,this.numeroModificaciones.toString(),this.precioTotal.toString()]
      // Enviamos tanto el archivo como el correo al servidor
      await this.fileUploadService.sendEmail(this.userEmail,this.selectedFile,carac);
      this.showPopupMessage(true, 'Correo enviado exitosamente');
    } catch (error) {
      console.error(error);
      this.showPopupMessage(false, 'Error al enviar el correo');
    }
  }

  // Mostrar el popup con el mensaje correspondiente
  showPopupMessage(success: boolean, message: string) {
    if (success) {
      this.showPopup = true;
      document.body.style.overflow = 'hidden'; // Bloquea scroll
    } else {
      alert('Hubo un problema al enviar el correo. Intenta de nuevo.');
    }
  }

  // Cerrar el popup y redirigir al home
  closePopup() {
    this.showPopup = false;
    window.location.href = '/';  // Redirige a la página principal
  }

  get codigoCamiseta(): string {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}_${(now.getMonth() + 1).toString().padStart(2, '0')}_${now.getDate().toString().padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}_${now.getMinutes().toString().padStart(2, '0')}`;
    return `OTR-${formattedDate}`; // Agregamos timestamp para evitar duplicados
  }
}
