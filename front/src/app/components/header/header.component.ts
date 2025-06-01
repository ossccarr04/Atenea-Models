import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild('navbarCollapse') navBarCollapsed!: ElementRef;

  constructor(private router: Router) {}

  navigateToInicio() {
    this.router.navigate(['/inicio']).then(() => this.closeNavbar());
  }

  navigateToSobreNosotros() {
    this.router.navigate(['/sobre-nosotros']).then(() => this.closeNavbar());
  }

  navigateToAyuda() {
    const baseUrl = window.location.origin;
    window.open(`${baseUrl}/ayuda`, '_blank');
    this.closeNavbar();
  }

  closeNavbar() {
    const collapseElement = this.navBarCollapsed.nativeElement;
    if (collapseElement.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(collapseElement, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  }
}
