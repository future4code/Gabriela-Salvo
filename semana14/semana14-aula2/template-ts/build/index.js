"use strict";
const operacao = (process.argv[2]);
const primeiroNumero = Number(process.argv[3]);
const segundoNumero = Number(process.argv[4]);
function calculo(operacao, primeiroNumero, segundoNumero) {
    switch (operacao) {
        case "soma":
            return primeiroNumero + segundoNumero;
        case "subt":
            return primeiroNumero - segundoNumero;
        case "mult":
            return primeiroNumero * segundoNumero;
        default:
            return "Operação inválida!";
    }
}
console.log(calculo(operacao, primeiroNumero, segundoNumero));
