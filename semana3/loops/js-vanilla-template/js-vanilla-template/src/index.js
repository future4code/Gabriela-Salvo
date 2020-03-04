// /EXERCICIO 1

/* a variável i é incrementada com + 1 e depois a variavel sum soma ela própria e incrementa o valor que já foi atribuido a i.
O resultado no console é 105

*/


/* a) acrescenta um valor dentro de uma array

b) Array(4) [10, 15, 25, 30]

c)array(6) [ 12, 15, 18, 21, 27, 30]
array(1) [12]
*/


const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}

