//EXERCÍCIO 1

/* 
RESPOSTA:
O código realiza o teste para verificar se o numero é par ou ímpar com o % (que nos devolve resto da divisão)
Para numeros de resto igual a 0 (números pares) ele imprime "Passou no teste" e pra números cujo resto é diferente de 0 ele imprime "Não passou no teste"
*/



//EXERCÍCIO 2

/*

a. Para que serve o código acima?

RESPOSTA: Serve para verificar preço da fruta selecionada pelo operador do sistema.

b. Qual será a mensagem impressa no console, 
se o valor de fruta for `"Maçã"`?

RESPOSTA: O preço da fruta Maçã é R$2.25

c. Considere que você vá ao mercado com o objetivo 
de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva.
 Qual seria o preço que você pagaria?

 RESPOSTA: Pagaria 9.55 reais porque o item Banana não estaria dentro do programa
  seria impossivel comprar.

d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `deafult` (o `break` indicado
 pelo comentário "BREAK PARA O ITEM d.")?
 
 RESPOSTA: Ele daria o preço certo, porém o programa
 faria a verificação de todas as cases.

 */

 


//EXERCÍCIO 3

/* RESPOSTA: O terminal dirá que ocorreu um erro inesperado 
porque a variável mensagem foi declarada apenas dentro do bloco if
ou seja, pertence ao escopo local e não ao escopo global que poderia
ser acessado por qualquer parte do programa.
*/

//EXERCÍCIO 4




/*
a )

let primeiroNumero = Number(prompt("Digite um numero de 1 a 10"))
let segundoNumero = Number(prompt("Digite um numero de 1 a 10"))

if (primeiroNumero > segundoNumero) {
    console.log (primeiroNumero)
    console.log (segundoNumero)
} else if (primeiroNumero<segundoNumero){

console.log (segundoNumero)
console.log (primeiroNumero)


}else {
    console.log("Preciso de numeros diferentes pra funcionar!")

}

Se os numeros fossem iguais nesse meu programa, ele imprimiria
 os dois numeros independente de qualquer coisa 
 sem procurar por maior ou menor. Fiz uma adaptação para ele mostrar outra frase quando forem numeros iguals!
 */





const primeiroNumero = Number(prompt("Digite um numero de 1 a 10"))
const segundoNumero = Number(prompt("Digite um numero de 1 a 10"))
const terceiroNumero = Number(prompt("Digite um numero de 1 a 10"))


if ((primeiroNumero > segundoNumero) && (segundoNumero > terceiroNumero)) {
    console.log (primeiroNumero)
    console.log (segundoNumero)
    console.log (terceiroNumero)

}else if ((primeiroNumero > terceiroNumero)  && (terceiroNumero > segundoNumero)) {

    console.log (primeiroNumero)
    console.log (terceiroNumero)
    console.log (segundoNumero)

}else if ((segundoNumero > primeiroNumero)  && (primeiroNumero > terceiroNumero)) {

    console.log (segundoNumero)
    console.log (primeiroNumero)
    console.log (terceiroNumero)

}else if (( segundoNumero > terceiroNumero)  && (terceiroNumero > primeiroNumero)) {

    console.log (segundoNumero)
    console.log (terceiroNumero)
    console.log (primeiroNumero) 
    //até aqui ok

}else if ((terceiroNumero > primeiroNumero)  && (primeiroNumero > segundoNumero)) {

    console.log (terceiroNumero)
    console.log (primeiroNumero)
    console.log (segundoNumero)

}else if ((terceiroNumero > segundoNumero)  && (segundoNumero > primeiroNumero)) {

    console.log (terceiroNumero)
    console.log (segundoNumero)
    console.log (primeiroNumero)


}

else {
    console.log ("Preciso de numeros diferentes pra funcionar!")
}
// EXERCÍCIO 5


