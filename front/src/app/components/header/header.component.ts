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

  constructor(private router: Router) { }

  navigateToInicio() {
    this.router.navigate(['/inicio']);
  }

  navigateToSobreNosotros() {
    this.router.navigate(['/sobre-nosotros']);
  }

  navigateToAyuda() {
    const baseUrl = window.location.origin;
    window.open(`${baseUrl}/ayuda`, '_blank');
  }

  navigateToContacto(){
    this.router.navigate(['/contacto']);
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
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
