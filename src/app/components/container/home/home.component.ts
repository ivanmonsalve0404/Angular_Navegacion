import { Component } from '@angular/core';
import { ARREGLO_IMAGENES } from '../../../utilities/imagenes-inicio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public arregloImagenes: any[];

  constructor() {
    this.arregloImagenes = ARREGLO_IMAGENES;
  }
}
