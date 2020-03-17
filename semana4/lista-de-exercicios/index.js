/*

 INTERPRETAÇAO DE CODIGO

 1) Temos uma função com um parâmetro
dentro dela temos uma constante chamada cotação que será o valor
convertido para numero do que o usuário digitat
a função com o return retornará o valor em dólar (que é uma variável)
 x a cotação do usuário. A constante meuDinheiro receberá o valor 100 do
 conversorDeMoeda
 o console irá retornar o valor cotado


 2)A função investeDinheiro recebe dois parâmetros
 temos uma variável let chamada valorAposInvestimento

 usamos um switch case com o tipo de investimento diferentes que são 4
 cada um desses investimentos será o valor multiplicado por 1.03 reais
 se nao for escrito nenhum investiment, aparece um aviso ao usuário
 a função irá retornar o valor calculado apos as multiplicações

 temos duas novas constantes: uma que recebe  o valor novo do montante que nos dá
 referência de 150 em Ações e 200 no tesouro direto mas este retornrá falso, pois
 não existe esse case
 


 3)Recebemos um array com números aleatórios e duas arrays vaziias

 percorremos todo array e o programa pega apenas os números pares (que resultam em zero na divisao)
 e colocam eles no array1 e os números ímpares, colocando no array2
 no final o console mostra a quantidade de numeros no array1 e no array2


 4)
 Recebe um array numeros de números aleatórios

 duas variávels uma numero1 que recebe Infinity (que eu nao entendi bem o que é
    mas pelo contexto parece ser números infinitos)
    e a let numero2 que recebe apenas o valor 0.

    percorremos todo o array numeros
    e se o número for menor que algum número do array numero1
    o numero1 recebe o o número pelo qual foi comparado

    e se algum numerero do array numero for maior que algum do array2
    o numero do array numero2 recebe o numero do array numero.
    o console nos mostra novamente os arrays atualizados
*/

/* Exercícios de Lógica de Programação

1)
Usando FOR

const array = [1, 3, 4, 10]
for (let i = 0; i < array.length; i++){
    console.log("numero"+ i)

}

Usando ForEach

const array = [1, 3, 4, 10]
array.forEach (console.log ("numero"+ array))



Usando for of

const array = [1, 3, 4, 10]

for (indice of array) {
    indice ++

console.log ("numero "+ indice )
}

2)

a) FALSE
b)FALSE
c)TRUE
d)TRUE
e)FALSE

3)
O código nao funciona porque ele apenas
fez a constante quantidadeDeNumerosPares mas
nao atribuiu nenhum valor  ela

*/
// Esse eu não entendi bem como fazer
// const quantidadeDeNumerosPares
// let i = 0
// while(i <= quantidadeDeNumerosPares) {
//   console.log(i*2)
// }


/*
4)

function ladosTriangulo (a, b, c) {
    
   
    if (a === b === b ){
        console.log("Esse triângulo é isosceles")
    }else if (a!== b &&  b!==c) {
        console.log("Esse triângulo é escaleno ")
    }
        console.log("Esse triângulo é equilátero")
    }


ladosTriangulo(1, 1 ,1 )