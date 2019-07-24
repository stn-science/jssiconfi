
import fetch, { Headers, RequestInit } from 'node-fetch';



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

enum TIPO_ANEXO_RREO {
     "RreoAnexo01"= "RREO-Anexo 01",
     "RreoAnexo02"= "RREO-Anexo 02",
     "RreoAnexo03"= "RREO-Anexo 03",
     "RreoAnexo04"= "RREO-Anexo 04",
     "RreoAnexo04RGPS"= "RREO-Anexo 04 - RGPS",
     "RreoAnexo04RPPS"= "RREO-Anexo 04 - RPPS",
     "RreoAnexo 04.0 - RGPS"= "RREO-Anexo 04.0 - RGPS",
     "RreoAnexo041"= "RREO-Anexo 04.1",
     "RreoAnexo042"= "RREO-Anexo 04.2",
     "RreoAnexo043RGPS"= "RREO-Anexo 04.3 - RGPS",
     "RreoAnexo05"= "RREO-Anexo 05",
     "RreoAnexo06"= "RREO-Anexo 06",
     "RreoAnexo07"= "RREO-Anexo 07",
     "RreoAnexo09"= "RREO-Anexo 09",
     "RreoAnexo10 - RGPS"= "RREO-Anexo 10 - RGPS",
     "RreoAnexo10 - RPPS"= "RREO-Anexo 10 - RPPS",
     "RreoAnexo11"= "RREO-Anexo 11",
     "RreoAnexo13"= "RREO-Anexo 13",
     "RreoAnexo14"= "RREO-Anexo 14",
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

enum TIPO_DEMONSTRATIVO  {
    'Rreo' = 'RREO',
    'Rgf' = 'RGF',
    'RgfSimplificado' = 'RGF SIMPLIFICADO',
    'Dca' = 'DCA'
}


export class Relatorio {

    constructor() {

    }

    // TODO: PEGAR O EXTRADO DO ESTADO
    async RelCompleto(param:{exercicio:number, period:number, tipoDemonstrativo:TIPO_DEMONSTRATIVO, codIbge:number}){

        let options = HTTP_OPTIONS;
        let url = `rreo?an_exercicio=${param.exercicio}&nr_periodo=${param.period}&co_tipo_demonstrativo=${param.tipoDemonstrativo}&no_anexo=RREO-Anexo%2001&id_ente=17`
        let result = await fetch(URL_BASE , HTTP_OPTIONS);
    }


}