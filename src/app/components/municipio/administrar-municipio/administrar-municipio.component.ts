import { Component, TemplateRef } from '@angular/core';
import { Municipio } from '../../../models/municipio';
import { arreglo_Municipios } from '../../../mocks/municipio-mock';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { mostrarMensaje } from '../../../utilities/mensaje';

@Component({
  selector: 'app-administrar-municipio',
  templateUrl: './administrar-municipio.component.html',
  styleUrl: './administrar-municipio.component.css'
})
export class AdministrarMunicipioComponent {
  [x: string]: any;
  public arregloMunicipios: Municipio[];
  public municipioSeleccionado: Municipio;

  public contenidoModal:string;
  public tituloModal:string;
  public cuerpoModal:string;

  public modalRef: BsModalRef;
  public temp: any;

  constructor(private modalService: BsModalService, private toastr: ToastrService) {
    this.arregloMunicipios = arreglo_Municipios;
    this.municipioSeleccionado = this.inicializarMunicipio();
    this.tituloModal = '';
    this.cuerpoModal = '';
    this.contenidoModal = '';
    this.modalRef = this.temp;
  }

  /*Lógica del Negocio*/
  private inicializarMunicipio(): Municipio {
    return new Municipio(0, "", new Date(), 0, 0, 1);
  }

  private eliminarMunicipio(objEliminar: Municipio): void {
    if (objEliminar.codigoMunicipio !== 0) {
      for (let i = 0; i < this.arregloMunicipios.length; i++) {
        if(this.arregloMunicipios[i] !== undefined){
          let comparar = this.arregloMunicipios[i].codigoMunicipio;
          if(comparar === objEliminar.codigoMunicipio){
            this.arregloMunicipios.splice(i, 1);
            mostrarMensaje("success", "El municipio se ha eliminado correctamente.", "Exito!", this.toastr);
          }
        }
      }
    } else {
      this.modalRef.hide();
    }
  }


  /** Ventana Modal*/
  public abrirVentanaModal(template: TemplateRef<any>, objMunicipio: Municipio): void {
    this.modalRef = this.modalService.show(template, {backdrop: "static", class: "lg"});
    this.municipioSeleccionado = objMunicipio;
    this.tituloModal = "Eliminar Municipio";
    this.contenidoModal = "¿Estás seguro de eliminar el municipio?";
    this.cuerpoModal = "El municipio " + objMunicipio.nombreMunicipio, " ha sido eliminado.";
  }

  public botonCancelar(): void {
    mostrarMensaje("error", "Le dio miedo al perro", "Muy suavee", this.toastr);
    this.modalRef.hide();
    this.municipioSeleccionado = this.inicializarMunicipio();
  }

  public botonEliminar(): void {
    this.eliminarMunicipio(this.municipioSeleccionado);
    this.modalRef.hide();
    this.municipioSeleccionado = this.inicializarMunicipio();
  }
}
