import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private route: Router) 
  { }

  navigateToInicio(){
    this.route.navigate(['/inicio']);
  }

  navigateToSobreNosotros() {
    this.route.navigate(['/sobre-nosotros']);
  }

  navigateToAyuda() {
  const url = this.route.serializeUrl(
    this.route.createUrlTree(['/ayuda'])
  );
  window.open(url, '_blank');
}
}
