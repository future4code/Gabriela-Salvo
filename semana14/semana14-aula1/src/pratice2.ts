
//exercicio 2
function numerosArray(array:number[])
 {

    let resultado : {

        qtdNumeros: number,
        qtdImpar: number,
        // numeroTotal: number
    } =

    {
        qtdNumeros: array.length,
        qtdImpar: (
            array.filter(numero=> numero %2 !== 0).length
        ),

    
        
    }

    return console.log(`${resultado.qtdNumeros} a quanditade de pares é ${resultado.qtdImpar}`)
 }
 numerosArray([1,2,3,4,5,6])