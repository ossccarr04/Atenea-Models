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
    
    try {
      const response = await firstValueFrom(this.http.post('/api/sendEmail', formData));
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
        break;
      case "VES":
        formData.append('codigo', carac[0]);
        formData.append('tipo', carac[1]);
        formData.append('manga', carac[2]);
        formData.append('cuello', carac[3]);
        formData.append('largo', carac[4]);
        break;
      case "PAN":
        formData.append('codigo', carac[0]);
        formData.append('tipo', carac[1]);
        formData.append('largo', carac[2]);
        break;
      case "OTR":
        formData.append('codigo', carac[0]);
        break;
    }
  }
}
