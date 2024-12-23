export class Municipio {
    public codigoMunicipio:number;
    public nombreMunicipio:string;
    public fechaFundacionMunicipio:Date;
    public habitantesMunicipio:number;
    public areaMunicipio:number;
    public estadoMunicipio:number;

    constructor(codigo: number, nombre: string, fundacion: Date, habitantes: number, area: number, estado:number) {
        this.codigoMunicipio = codigo;
        this.nombreMunicipio = nombre;
        this.fechaFundacionMunicipio = fundacion;
        this.habitantesMunicipio = habitantes;
        this.areaMunicipio = area;
        this.estadoMunicipio = estado;
    }
}
