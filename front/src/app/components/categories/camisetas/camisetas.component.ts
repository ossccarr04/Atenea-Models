import { Component } from '@angular/core';
import { FileUploadService } from 'src/app/file-upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camisetas',
  templateUrl: './camisetas.component.html',
  styleUrls: ['./camisetas.component.css']
})
export class CamisetasComponent {
  // Selección aleatoria al inicio
  constructor(private fileUploadService: FileUploadService, private route: Router) { }

  showPopup: boolean = false;
  imagenExiste: boolean = true;
  popupMessage: string = '';
  userEmail: string = '';
  tipoPrenda: string = "camisetas";

  // Precio base de la camiseta
  precio: number = 3.75;
  contModificaciones: number = 0;
  precioTotal:number = 0;
  firstLoad: boolean = true;

  entallado: string = "Entallado"
  manga: string = "Larga"
  cuello: string = "Pico"
  largo: string = "Normal"
  decoracion: string = "Sin decoracion"

  sexo: string = "Hombre";
  contorno_medidas: string = "XS";
  largo_medidas: string = "XS";
  sugerencias: string = '';
  

  modificacionesEstilo = {
  entallado: false,
  manga: false,
  cuello: false,
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

  updatePrecio(prop: keyof typeof this.modificacionesEstilo,value: any) {
    if (!this.originalEstilo) return;
    
    console.log(this.originalEstilo)
    console.log(this.modificacionesEstilo)
    const originalValue = this.originalEstilo[prop];
    const isModified = this.modificacionesEstilo[prop];

    if(value !== originalValue && !isModified){
      this.contModificaciones++;
      this.modificacionesEstilo[prop] = true;
    }
    if(value === originalValue && isModified){
      this.contModificaciones--;
      this.modificacionesEstilo[prop] = false;
    }
    this.precioTotal = this.precio * this.contModificaciones
  }

  acceptDesign(){
    this.firstLoad = false;
    this.originalEstilo = {
      entallado: this.entallado,
      manga: this.manga,
      cuello: this.cuello,
      largo: this.largo,
      decoracion: this.decoracion
    }
  }

  // Getter que actualiza la imagen automáticamente
  get imagenCamiseta(): string {
    const entalladoStr = this.entallado == "Entallado" ? `${this.entallado.toLowerCase().substring(0, 2)}-` : '';
    const mangaStr = this.manga ? `m${this.manga.toLowerCase().charAt(0)}` : '';
    const cuelloStr = this.cuello ? `-c${this.cuello.toLowerCase().charAt(0)}` : '';
    const largoStr = this.largo != "Normal" ? `-l${this.largo.toLowerCase().substring(0, 2)}` : '';

    let decoracion = '';
    switch (this.decoracion) {
      case "Logo frontal":
        decoracion = `-d${this.decoracion.toLowerCase().substring(0, 2)}f`;
        break;
      case "Logo trasero":
        decoracion = `-d${this.decoracion.toLowerCase().substring(0, 2)}t`;
        break;


    }
    return `assets/imgs/camisetas/cam-${entalladoStr}${mangaStr}${cuelloStr}${largoStr}${decoracion}.png`;
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
      const carac = [this.codigoCamiseta, this.entallado, this.manga, this.cuello, this.largo, this.decoracion,this.sexo,this.contorno_medidas,this.largo_medidas, this.sugerencias ,this.precioTotal.toString()];
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

  get codigoCamiseta(): string {
    const entalladoStr = this.entallado === "Entallado" ? "ENT" : "";
    const mangaStr = this.manga.substring(0, 2).toUpperCase();
    const cuelloStr = this.cuello.substring(0, 2).toUpperCase();
    const largoStr = this.largo.substring(0, 2).toUpperCase();
    let decoracionStr = '';
    switch (this.decoracion) {
      case "Sin decoracion":
        decoracionStr = '';
        break;
      case "Logo frontal":
        decoracionStr = `${this.decoracion.toLowerCase().substring(0, 2)}f`.toUpperCase();
        break;
      case "Logo trasero":
        decoracionStr = `${this.decoracion.toLowerCase().substring(0, 2)}t`.toUpperCase();
        break;


    }

    const now = new Date();
    const formattedDate = `${now.getFullYear()}_${(now.getMonth() + 1).toString().padStart(2, '0')}_${now.getDate().toString().padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}_${now.getMinutes().toString().padStart(2, '0')}`;

    return `CAM-${entalladoStr}${mangaStr}${cuelloStr}${largoStr}${decoracionStr}-${formattedDate}`; // Agregamos timestamp para evitar duplicados
  }
}


