"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eras;
(function (eras) {
    eras["PREHISTORIA"] = "pre-historia";
    eras["IDADEANTIGA"] = "idade antiga";
    eras["IDADEMEDIA"] = "idade media";
    eras["IDADEMODERNA"] = "idade moderna";
    eras["IDADECONTEMPORANEA"] = "idade contemporanea";
})(eras || (eras = {}));
let resultado = "";
function qualEra(anos, era) {
    switch (era) {
        case 'AC':
            if (anos < 1000) {
                return resultado = eras.PREHISTORIA;
            }
            else if (anos > 1000 && anos < 4000) {
                return resultado = eras.IDADEANTIGA;
            }
        case 'DC':
            if (anos > 476) {
                return resultado = eras.IDADEMEDIA;
            }
            else if (anos > 1453 && anos < 1789) {
                return resultado = eras.IDADEMODERNA;
            }
            else {
                return resultado = eras.IDADECONTEMPORANEA;
            }
        default:
            resultado = "Invalido.";
    }
}
console.log(qualEra(476, "AC"));
//# sourceMappingURL=pratice4.js.map