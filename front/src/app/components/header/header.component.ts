import { Component, AfterViewInit } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const carouselElement = document.querySelector('#carouselExampleCaptions');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 3000, // 3 segundos para cambiar slide
        ride: 'carousel'
      });
    }
  }

}
