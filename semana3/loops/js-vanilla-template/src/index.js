// /EXERCICIO 1

/* a variável i é incrementada com + 1 e depois a variavel sum soma ela própria e incrementa o valor que já foi atribuido a i.
O resultado no console é 105

*/


/* a) acrescenta um valor dentro de uma array

b) Array(4) [10, 15, 25, 30]

c)array(6) [ 12, 15, 18, 21, 27, 30]
array(1) [12]
*/

/* DESAFIO 

a cada linha acrescenta-se um 0 até que se atinja o máximo pela condição
0
00
000
0000

*/

/* EXERICIO 3 */


/* EXERCICIO 3

a)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = arrayOriginal [0]
let menor = arrayOriginal [0]
for(let num of arrayOriginal){
    if(num > maior) {
        maior = num
    }else if(num < menor){
        menor = num
    }
}
console.log("o maior numero é " + maior +"e o menor é "  menor)

*/

/*b)
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let arrayOriginalDividida = []

for  (let i = 0; i <arrayOriginal.length; i++){
    arrayOriginalDividida.push(arrayOriginal[i]/10)
}
console.log(arrayOriginalDividida)

*/



/*
c)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayOriginalDividido = []
for(let i = 0; i < arrayOriginal.length; i++){
    if( i % 2 === 0){
        arrayOriginalDividido.push(arrayOriginal[i])
    }
}
console.log(arrayOriginalDividido)

*/

/*
d) const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let texto
for(let i = 0; i < arrayOriginal.length; i++){
    texto = arrayOriginal[i]
    console.log("O elemento do índex ", i , " é " , texto)
}

*/










