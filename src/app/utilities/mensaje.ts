import { IndividualConfig, ToastrService } from "ngx-toastr";

export function mostrarMensaje(tipo: string, mensaje: string, titulo: string, toastr: ToastrService): void {
    const PARAMETROS_VENTANA: Partial<IndividualConfig> = {
        closeButton:true,
        enableHtml:true,
        progressBar:true,
        timeOut: 5000,
        positionClass:'toast-top-center'
    }

    switch(tipo.toLowerCase()) {        
        case "success":
            toastr.success(mensaje, titulo, PARAMETROS_VENTANA);
            break;
        case "error":
            toastr.error(mensaje, titulo, PARAMETROS_VENTANA);
            break;
        case "warning":
            toastr.warning(mensaje, titulo, PARAMETROS_VENTANA);
            break;
        default:
            toastr.info(mensaje, titulo, PARAMETROS_VENTANA);
            break;
    }
}
