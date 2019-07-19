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
var TIPO_DEMONSTRATIVO;
(function (TIPO_DEMONSTRATIVO) {
    TIPO_DEMONSTRATIVO[TIPO_DEMONSTRATIVO["RREO"] = 0] = "RREO";
    TIPO_DEMONSTRATIVO["RREOSimplificado"] = "RREO Simplificado";
})(TIPO_DEMONSTRATIVO || (TIPO_DEMONSTRATIVO = {}));
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
const URL_BASE = 'http://apidatalake.tesouro.gov.br/ords/siconfi/tt/rreo';
const HTTP_OPTIONS = {
    redirect: 'follow',
    compress: true,
    timeout: 30000,
    headers: {
        'accept': 'application/json'
    }
};
class RREO {
    constructor() {
    }
    getRREO(param) {
        return __awaiter(this, void 0, void 0, function* () {
            let options = HTTP_OPTIONS;
            options.
            ;
            let result = yield node_fetch_1.default(URL_BASE, HTTP_OPTIONS);
        });
    }
}
exports.RREO = RREO;
//# sourceMappingURL=jssiconfi.js.map