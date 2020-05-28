const array = [1, 2, 3, 4, 5, 6];
function numerosArray(array) {
    let resultado;
    let operacao = {
        qtdNumeros: array.length,
        qtdImpar: array.filter(numero => numero % 2 !== 0)
    };
    return console.log(`${operacao.qtdNumeros} a quanditade de impares é ${operacao.qtdImpar}`);
}
numerosArray(array);
//# sourceMappingURL=pratice2.js.map