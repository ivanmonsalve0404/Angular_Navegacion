import { Component } from '@angular/core';
import { Municipio } from '../../../models/municipio';
import { arreglo_Municipios } from '../../../mocks/municipio-mock';

@Component({
  selector: 'app-listar-municipio',
  templateUrl: './listar-municipio.component.html',
  styleUrl: './listar-municipio.component.css'
})
export class ListarMunicipioComponent {
  [x: string]: any;
  public arregloMunicipios: Municipio[];

  constructor() {
    this.arregloMunicipios = arreglo_Municipios;
  }
}
