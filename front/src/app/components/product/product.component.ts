import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  constructor(private route: Router) { }

  navigateToOtros() {

    this.route.navigate(['/otros']);
  }

  navigateToCamisetas() {
    this.route.navigate(['/camisetas']);
  }

  navigateToVestidos(){
    this.route.navigate(['/vestidos']);
  }

  navigateToPantalones(){
    this.route.navigate(['/pantalones']);
  }

  navigateToFaldas(){
    this.route.navigate(['/faldas']);
  }

}
