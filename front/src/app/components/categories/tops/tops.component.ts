import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from 'src/app/file-upload.service';

@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.css']
})
export class TopsComponent {


  constructor(private fileUploadService: FileUploadService, private route:Router) { }


  tipoPrenda: string = "tops";
  
  onTipoPrendaChange(tipo: string) {
    if(tipo == "camisetas"){
      this.route.navigate(['/camisetas']);
    }

  }
}
