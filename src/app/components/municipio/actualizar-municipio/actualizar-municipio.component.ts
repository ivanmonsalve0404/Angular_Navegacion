import { Component, OnDestroy, OnInit } from '@angular/core';
import { Municipio } from '../../../models/municipio';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { arreglo_Municipios } from '../../../mocks/municipio-mock';
import { mostrarMensaje } from '../../../utilities/mensaje';

@Component({
  selector: 'app-actualizar-municipio',
  templateUrl: './actualizar-municipio.component.html',
  styleUrl: './actualizar-municipio.component.css'
})
export class ActualizarMunicipioComponent implements OnInit, OnDestroy {
  public objMunicipio : Municipio;
  public suscripcionParametro: Subscription;
  private tmp: any;
  public codMunicipio: number;

  constructor(private lenguaje:BsLocaleService, private toastr:ToastrService, private ruta: ActivatedRoute, private navegacion: Router) {
    this.objMunicipio = this.inicializarMunicipio();
    lenguaje.use('es');
    this.suscripcionParametro = this.tmp;
    this.codMunicipio = 0;
  }

  ngOnInit(): void {
    let codigo = 0;
    this.suscripcionParametro = this.ruta.paramMap.subscribe((parametro:ParamMap) => {
      const dato = String(parametro.get("codMunicipio"));
      codigo = parseFloat(dato) as number;
    });

    this.objMunicipio = arreglo_Municipios.find((objMuni) => {return objMuni.codigoMunicipio == codigo}) as Municipio;
    this.codMunicipio = codigo;
  }

  ngOnDestroy(): void {
    if (this.suscripcionParametro) {
      this.suscripcionParametro.unsubscribe();
    } else {
      
    }
  }

  /*Inicio: Lógica del Negocio*/
  private inicializarMunicipio(): Municipio {
    return new Municipio(0, "", new Date(), 0, 0, 0);
  }

  public enviarFormulario(formulario: NgForm): void {
    const arrMunicipios: Municipio[] = arreglo_Municipios;

    if(this.codMunicipio > 0){
      for(let i = 0; i < arrMunicipios.length; i++){
        if(arrMunicipios[i] != undefined){
          const comparar = arrMunicipios[i].codigoMunicipio;
          if(comparar == this.codMunicipio){
            arrMunicipios[i] = this.objMunicipio;
          }
          
        }
      }
      mostrarMensaje("sucess", "Exito al actualizar el municipio", "Exito!!", this.toastr);
      this.navegacion.navigate(['/town/admin']);
    } else {
      mostrarMensaje("error", "Fallo al actualizar el municipio", "Error", this.toastr);
    }
  }

  /*Fin de lógica del negocio*/
}
