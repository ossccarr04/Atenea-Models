import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {

  precio: number = 7.85; // Precio base de la camiseta

  constructor() { }

  ngOnInit(): void {
  }

}
