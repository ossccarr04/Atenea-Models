import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from 'src/app/file-upload.service';

@Component({
  selector: 'app-chaquetas',
  templateUrl: './chaquetas.component.html',
  styleUrls: ['./chaquetas.component.css']
})
export class ChaquetasComponent {

  constructor(private fileUploadService: FileUploadService, private route: Router) { }

  showPopup: boolean = false;
  imagenExiste: boolean = true;
  popupMessage: string = '';
  userEmail: string = '';
  tipoPrenda: string = "chaquetas";

  // Precio base de la camiseta
  precio: number = 3.75;
  contModificaciones: number = 0;
  precioTotal: number = 0;
  firstLoad: boolean = true;

  tipo: string = "Normal" 
  largo: string = "Larga"
  decoracion:string = "Sin decoracion";

  sexo: string = "Hombre";
  contorno_medidas: string = "XS";
  largo_medidas: string = "XS";
  sugerencias: string = '';

  modificacionesEstilo = {
    tipo: false,
    largo: false,
    decoracion: false
  };

  originalEstilo!: { [K in keyof typeof this.modificacionesEstilo]: string };


  ngOnInit() {
    this.validarImagenCamiseta().then((existe) => {
      this.imagenExiste = existe;
    });
  }

  // O cada vez que cambien las opciones:
  onCambioDeOpciones() {
    this.validarImagenCamiseta().then((existe) => {
      this.imagenExiste = existe;
    });
  }

  onTipoPrendaChange(tipo: string) {
    if (tipo == "tops") {
      this.route.navigate(['/tops']);
    }

  }

  updatePrecio(prop: keyof typeof this.modificacionesEstilo, value: any) {
    if (!this.originalEstilo) return;

    const originalValue = this.originalEstilo[prop];
    const isModified = this.modificacionesEstilo[prop];

    if (value !== originalValue && !isModified) {
      this.contModificaciones++;
      this.modificacionesEstilo[prop] = true;
    }
    if (value === originalValue && isModified) {
      this.contModificaciones--;
      this.modificacionesEstilo[prop] = false;
    }
    this.precioTotal = this.precio * this.contModificaciones
  }

  acceptDesign() {
    this.firstLoad = false;
    this.originalEstilo = {
      tipo: this.tipo,
      largo: this.largo,
      decoracion: this.decoracion
    }
  }

  // Getter que actualiza la imagen automáticamente
  get imagenCamiseta(): string {
    const tipoStr = `t${this.tipo.toLowerCase().substring(0, 2)}-`;
    const largoStr = this.largo != "Larga" ? `l${this.largo.toLowerCase().substring(0, 2)}` : this.largo.toLowerCase().substring(0, 2);

    let decoracion = '';
    switch (this.decoracion) {
      case "Logo frontal":
        decoracion = `-d${this.decoracion.toLowerCase().substring(0, 2)}f`;
        break;
    }
    return `assets/imgs/chaquetas/cha-${tipoStr}${largoStr}${decoracion}.jpg`;
  }

  async validarImagenCamiseta(): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = this.imagenCamiseta;

      img.onload = () => {
        console.log("Imagen encontrada:", img.src);
        resolve(true);
      };

      img.onerror = () => {
        console.error("Imagen no encontrada:", img.src);
        resolve(false);
      };
    });
  }


  onEmailChange(event: any) {
    this.userEmail = event.target.value;
  }

  // Método para enviar el correo
  async onSendEmail() {
    if (!this.userEmail || !this.userEmail.includes('@') || !this.imagenExiste) return;


    try {
      const fileName = this.fileUploadService.getFileNameFromUrl(this.imagenCamiseta);
      const file = await this.fileUploadService.urlToFile(this.imagenCamiseta, fileName, "image/png");
      const carac = [this.codigoChaqueta, this.tipo, this.largo,this.decoracion, this.sexo,this.contorno_medidas,this.largo_medidas,this.sugerencias , this.precioTotal.toString()];
      await this.fileUploadService.sendEmail(this.userEmail, file, carac);
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

  get codigoChaqueta(): string {
    const tipoStr = this.tipo.substring(0, 2).toUpperCase();
    const largoStr = this.largo.substring(0, 2).toUpperCase();

    const now = new Date();
    const formattedDate = `${now.getFullYear()}_${(now.getMonth() + 1).toString().padStart(2, '0')}_${now.getDate().toString().padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}_${now.getMinutes().toString().padStart(2, '0')}`;

    return `CHA-${tipoStr}${largoStr}-${formattedDate}`; // Agregamos timestamp para evitar duplicados
  }
}
