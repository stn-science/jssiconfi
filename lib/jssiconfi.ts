
import fetch, { Headers, RequestInit } from 'node-fetch';

enum TIPO_DEMONSTRATIVO {
    "RREO",
    "RREOSimplificado" = "RREO Simplificado"
}

enum TIPO_ANEXO {
    "AnexoI-AB" = "Anexo I-AB",
    "AnexoI-C" = "Anexo I-C",
    "AnexoI-D" = "Anexo I-D",
    "AnexoI-E" = "Anexo I-E",
    "AnexoI-F" = "Anexo I-F",
    "AnexoI-G" = "Anexo I-G",
    "AnexoI-HI" = "Anexo I-HI",
    "DCAAnexoI-AB" = "DCA-Anexo I-AB",
    "DCAAnexoI-C" = "DCA-Anexo I-C",
    "DCAAnexoI-D" = "DCA-Anexo I-D",
    "DCAAnexoI-E" = "DCA-Anexo I-E",
    "DCAAnexoI-F" = "DCA-Anexo I-F",
    "DCAAnexoI-G" = "DCA-Anexo I-G",
    "DCAAnexoI-HI" = "DCA-Anexo I-HI",
}

const URL_BASE= 'http://apidatalake.tesouro.gov.br/ords/siconfi/tt/rreo';

const HTTP_OPTIONS: RequestInit = {
    redirect: 'follow',
    compress: true,
    timeout: 30000,
    headers : {
        'accept':'application/json'
    }
}


export class RREO {

    constructor() {

    }

    async getRREO(param:{exercicio:number, period:number, tipoDemonstrativo:TIPO_DEMONSTRATIVO, tipoAnexo:TIPO_ANEXO, codIbge:number}){

        let options = HTTP_OPTIONS;
        options.

        let result = await fetch(URL_BASE , HTTP_OPTIONS);
    }


}