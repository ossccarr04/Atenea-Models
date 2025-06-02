import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {

  showPopup: boolean = false;
  popupMessage: string = '';
  constructor(private http: HttpClient) { }

  async sendEmail(email: string,file: File, carac: string[]): Promise<any> {
   
    const formData = new FormData();
    if(file){
      formData.append('file', file, file.name);
    }
    
    formData.append('email', email); // Asegúrate de agregar el correo del usuario

    this.chooseCategory(carac, formData);
    
    //'http://localhost:3000/send-email'
    //'api/sendEmail'
    try {
      const response = await firstValueFrom(this.http.post('api/sendEmail', formData));
      return response;
    } catch (error) {
      console.error('Error al enviar el correo', error);
      throw error;
    }
  }

  async urlToFile(url: string, filename: string, mimeType: string): Promise<File> {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], filename, { type: mimeType });
  }

  getFileNameFromUrl(url: string): string {
    return url.split('/').pop() || 'imagen.png';  // Si falla, usa un nombre por defecto
  }


  chooseCategory(carac: string[], formData: FormData){
    switch(carac[0].substring(0, 3)){ // Dependiendo de la prenda, se envían diferentes características
      case "CAM":
        formData.append('codigo', carac[0]);
        formData.append('entallado', carac[1]);
        formData.append('manga', carac[2]);
        formData.append('cuello', carac[3]);
        formData.append('largo', carac[4]);
        formData.append('decoracion', carac[5]);
        formData.append('sexo', carac[6]);
        formData.append('contorno_medidas', carac[7]);
        formData.append('largo_medidas', carac[8]);
        formData.append('sugerencias', carac[9]);
        formData.append('precio', carac[10]);
        break;
      case "VES":
        formData.append('codigo', carac[0]);
        formData.append('tipo', carac[1]);
        formData.append('manga', carac[2]);
        formData.append('cuello', carac[3]);
        formData.append('largo', carac[4]);
        formData.append('sexo', carac[5]);
        formData.append('contorno_medidas', carac[6]);
        formData.append('largo_medidas', carac[7]);
        formData.append('sugerencias', carac[8]);
        formData.append('precio', carac[9]);
        break;
      case "PAN":
        formData.append('codigo', carac[0]);
        formData.append('tipo', carac[1]);
        formData.append('largo', carac[2]);
        formData.append('sexo', carac[3]);
        formData.append('contorno_medidas', carac[4]);
        formData.append('largo_medidas', carac[5]);
        formData.append('sugerencias', carac[6]);
        formData.append('precio', carac[7]);
        break;
      case "FAL":
        formData.append('codigo', carac[0]);
        formData.append('entallado', carac[1]);
        formData.append('largo', carac[2]);
        formData.append('sexo', carac[3]);
        formData.append('contorno_medidas', carac[4]);
        formData.append('largo_medidas', carac[5]);
        formData.append('sugerencias', carac[6]);
        formData.append('precio', carac[7]);
        break;
      case "CHA":
        formData.append('codigo', carac[0]);
        formData.append('tipo', carac[1]);
        formData.append('largo', carac[2]);
        formData.append('decoracion', carac[3]);
        formData.append('sexo', carac[4]);
        formData.append('contorno_medidas', carac[5]);
        formData.append('largo_medidas', carac[6]);
        formData.append('sugerencias', carac[7]);
        formData.append('precio', carac[8]);
        break;
      case "OTR":
        formData.append('codigo', carac[0]);
        formData.append('sugerencias', carac[1]);
        formData.append('precio', carac[2]);
        break;
    }
  }
}
