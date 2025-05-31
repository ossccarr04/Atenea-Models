import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent {

  constructor() { }

  goToZDHC(){
    window.open('https://www.roadmaptozero.com/', '_blank');
  }

  goToTE(){
    window.open('https://textileexchange.org/', '_blank');
  }
}
