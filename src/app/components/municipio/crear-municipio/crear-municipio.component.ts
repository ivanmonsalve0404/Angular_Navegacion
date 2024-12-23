import { Component } from '@angular/core';
import { Municipio } from '../../../models/municipio';
import { NgForm } from '@angular/forms';
import { arreglo_Municipios } from '../../../mocks/municipio-mock';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { mostrarMensaje } from '../../../utilities/mensaje';

import { esLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

defineLocale('es', esLocale);

@Component({
  selector: 'app-crear-municipio',
  templateUrl: './crear-municipio.component.html',
  styleUrl: './crear-municipio.component.css'
})
export class CrearMunicipioComponent {

  public objMunicipio : Municipio;

  constructor(private toastr: ToastrService, private navegacion: Router, private lenguaje: BsLocaleService) {
    this.objMunicipio = this.inicializarMunicipio();
    lenguaje.use('es');
  }

  /*Inicio: Lógica del Negocio*/
  private inicializarMunicipio(): Municipio {
    return new Municipio(0, "", new Date(), 0, 0, 1);
  }  

  public enviarFormulario(formulario: NgForm): void {
    let codigo = arreglo_Municipios.length + 1;
    this.objMunicipio.codigoMunicipio = codigo;

    arreglo_Municipios.push(this.objMunicipio);
    mostrarMensaje("success", "Registro completado del municipio", "Exito!!", this.toastr);
    this.navegacion.navigate(['/town/list']);

    /*Toca echarle el mensaje elegante*/
    /*Lo mandamos para el listar*/
    this.objMunicipio = this.inicializarMunicipio();
  }

  /*Fin de lógica del negocio*/
}
