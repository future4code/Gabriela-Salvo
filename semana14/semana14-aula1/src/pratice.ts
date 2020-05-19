

//exercicio 1
function recebeNumeros (a:number, b:number): any {
    
    let maiorNumero;
    let resultado : {
        somar: number,
        subtrair: number,
        multi: number,
        bool: any
    } =

    {
        multi: a *b,
        somar: a + b,
        subtrair: a-b,
        bool: (a > b ? maiorNumero = a: maiorNumero = b)
    }

    return `a soma é ${resultado.somar}, a subtração é ${resultado.subtrair}, a multiplicação é ${resultado.multi} e o maior é: ${resultado.bool}`
  
}
console.log(recebeNumeros(3,8))


