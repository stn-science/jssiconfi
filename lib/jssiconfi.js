"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
var TIPO_ANEXO;
(function (TIPO_ANEXO) {
    TIPO_ANEXO["AnexoI-AB"] = "Anexo I-AB";
    TIPO_ANEXO["AnexoI-C"] = "Anexo I-C";
    TIPO_ANEXO["AnexoI-D"] = "Anexo I-D";
    TIPO_ANEXO["AnexoI-E"] = "Anexo I-E";
    TIPO_ANEXO["AnexoI-F"] = "Anexo I-F";
    TIPO_ANEXO["AnexoI-G"] = "Anexo I-G";
    TIPO_ANEXO["AnexoI-HI"] = "Anexo I-HI";
    TIPO_ANEXO["DCAAnexoI-AB"] = "DCA-Anexo I-AB";
    TIPO_ANEXO["DCAAnexoI-C"] = "DCA-Anexo I-C";
    TIPO_ANEXO["DCAAnexoI-D"] = "DCA-Anexo I-D";
    TIPO_ANEXO["DCAAnexoI-E"] = "DCA-Anexo I-E";
    TIPO_ANEXO["DCAAnexoI-F"] = "DCA-Anexo I-F";
    TIPO_ANEXO["DCAAnexoI-G"] = "DCA-Anexo I-G";
    TIPO_ANEXO["DCAAnexoI-HI"] = "DCA-Anexo I-HI";
})(TIPO_ANEXO || (TIPO_ANEXO = {}));
var TIPO_ANEXO_RREO;
(function (TIPO_ANEXO_RREO) {
    TIPO_ANEXO_RREO["RreoAnexo01"] = "RREO-Anexo 01";
    TIPO_ANEXO_RREO["RreoAnexo02"] = "RREO-Anexo 02";
    TIPO_ANEXO_RREO["RreoAnexo03"] = "RREO-Anexo 03";
    TIPO_ANEXO_RREO["RreoAnexo04"] = "RREO-Anexo 04";
    TIPO_ANEXO_RREO["RreoAnexo04RGPS"] = "RREO-Anexo 04 - RGPS";
    TIPO_ANEXO_RREO["RreoAnexo04RPPS"] = "RREO-Anexo 04 - RPPS";
    TIPO_ANEXO_RREO["RreoAnexo 04.0 - RGPS"] = "RREO-Anexo 04.0 - RGPS";
    TIPO_ANEXO_RREO["RreoAnexo041"] = "RREO-Anexo 04.1";
    TIPO_ANEXO_RREO["RreoAnexo042"] = "RREO-Anexo 04.2";
    TIPO_ANEXO_RREO["RreoAnexo043RGPS"] = "RREO-Anexo 04.3 - RGPS";
    TIPO_ANEXO_RREO["RreoAnexo05"] = "RREO-Anexo 05";
    TIPO_ANEXO_RREO["RreoAnexo06"] = "RREO-Anexo 06";
    TIPO_ANEXO_RREO["RreoAnexo07"] = "RREO-Anexo 07";
    TIPO_ANEXO_RREO["RreoAnexo09"] = "RREO-Anexo 09";
    TIPO_ANEXO_RREO["RreoAnexo10 - RGPS"] = "RREO-Anexo 10 - RGPS";
    TIPO_ANEXO_RREO["RreoAnexo10 - RPPS"] = "RREO-Anexo 10 - RPPS";
    TIPO_ANEXO_RREO["RreoAnexo11"] = "RREO-Anexo 11";
    TIPO_ANEXO_RREO["RreoAnexo13"] = "RREO-Anexo 13";
    TIPO_ANEXO_RREO["RreoAnexo14"] = "RREO-Anexo 14";
})(TIPO_ANEXO_RREO || (TIPO_ANEXO_RREO = {}));
const URL_BASE = 'http://apidatalake.tesouro.gov.br/ords/siconfi/tt/rreo';
const HTTP_OPTIONS = {
    redirect: 'follow',
    compress: true,
    timeout: 30000,
    headers: {
        'accept': 'application/json'
    }
};
var TIPO_DEMONSTRATIVO;
(function (TIPO_DEMONSTRATIVO) {
    TIPO_DEMONSTRATIVO["Rreo"] = "RREO";
    TIPO_DEMONSTRATIVO["Rgf"] = "RGF";
    TIPO_DEMONSTRATIVO["RgfSimplificado"] = "RGF SIMPLIFICADO";
    TIPO_DEMONSTRATIVO["Dca"] = "DCA";
})(TIPO_DEMONSTRATIVO || (TIPO_DEMONSTRATIVO = {}));
class Relatorio {
    constructor() {
    }
    // TODO: PEGAR O EXTRADO DO ESTADO
    RelCompleto(param) {
        return __awaiter(this, void 0, void 0, function* () {
            let options = HTTP_OPTIONS;
            let url = `rreo?an_exercicio=${param.exercicio}&nr_periodo=${param.period}&co_tipo_demonstrativo=${param.tipoDemonstrativo}&no_anexo=RREO-Anexo%2001&id_ente=17`;
            let result = yield node_fetch_1.default(URL_BASE, HTTP_OPTIONS);
        });
    }
}
exports.Relatorio = Relatorio;
//# sourceMappingURL=jssiconfi.js.map