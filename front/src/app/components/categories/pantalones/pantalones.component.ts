import { Component } from '@angular/core';
import { FileUploadService } from 'src/app/file-upload.service';

@Component({
  selector: 'app-pantalones',
  templateUrl: './pantalones.component.html',
  styleUrls: ['./pantalones.component.css']
})
export class PantalonesComponent {

  // Selección aleatoria al inicio
  constructor(private fileUploadService: FileUploadService) { }

  showPopup: boolean = false;
  imagenExiste: boolean = true;
  popupMessage: string = '';
  userEmail: string = '';

  // Precio base de la camiseta
  precio: number = 3.75;
  contModificaciones: number = 0;
  precioTotal: number = 0;
  firstLoad: boolean = true;

  tipo: string = "Ajustado"
  largo: string = "Largo"



  modificacionesEstilo = {
    tipo: false,
    largo: false,
  };

    originalEstilo!: { [K in keyof typeof this.modificacionesEstilo]: string };

  ngOnInit() {
    this.validarImagen().then((existe) => {
      this.imagenExiste = existe;
    });
  }

  // O cada vez que cambien las opciones:
  onCambioDeOpciones() {
    this.validarImagen().then((existe) => {
      this.imagenExiste = existe;
    });
  }

   acceptDesign() {
    this.firstLoad = false;
    this.originalEstilo = {
      tipo: this.tipo,
      largo: this.largo,
    }
  }

  updatePrecio(prop: keyof typeof this.modificacionesEstilo, value: any) {
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

  // Getter que actualiza la imagen automáticamente
  get imagenPantalon(): string {
    const tipoStr = this.tipo == "Ajustado" ? `t${this.tipo.toLowerCase().substring(0, 2)}` : `tan`;
    const largoStr = this.largo == "Largo" ? `-${this.largo.toLowerCase().substring(0, 2)}` : `-l${this.largo.toLowerCase().substring(0, 2)}`;

    /*
        let decoracion = '';
        switch (this.decoracion) {
          case "Logo grande":
            decoracion = `-d${this.decoracion.toLowerCase().substring(0, 2)}g`;
            break;
          case "Logo en los laterales":
            decoracion = `-d${this.decoracion.toLowerCase().substring(0, 2)}l`;
            break;
          case "Eslogan":
            decoracion = `-d${this.decoracion.toLowerCase().substring(0, 2)}`;
            break;
    
        }
    
        Falta poner la decoracion en el return
            */
    return `assets/imgs/pantalones/pan-${tipoStr}${largoStr}.jpg`;
  }

  async validarImagen(): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = this.imagenPantalon;

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
      const fileName = this.fileUploadService.getFileNameFromUrl(this.imagenPantalon);
      const file = await this.fileUploadService.urlToFile(this.imagenPantalon, fileName, "image/jpg");
      const carac = [this.codigoPantalon, this.tipo, this.largo, this.precioTotal.toString()];
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

  get codigoPantalon(): string {
    const tipoStr = this.tipo === "Ajustado" ? "AJ" : "AN";
    const largoStr = this.largo.substring(0, 2).toUpperCase();

    const now = new Date();
    const formattedDate = `${now.getFullYear()}_${(now.getMonth() + 1).toString().padStart(2, '0')}_${now.getDate().toString().padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}_${now.getMinutes().toString().padStart(2, '0')}`;

    return `PAN-${tipoStr}${largoStr}-${formattedDate}`; // Agregamos timestamp para evitar duplicados
  }
}
