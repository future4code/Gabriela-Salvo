

/*1. 
a. FALSE
b. FALSE
c. TRUE
d. FALSE
e. BOOL

*/


/*2.
let array
    console.log('I. ', array)
    //undefined
    
    array = null
    console.log('II. ', array)
    //null
    
    
    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('III. ', array.length)
    //11

    
    let i = 0
    console.log('IV. ', array[i], " e ", array[i+1])
    //3 e 4
    
    array[i+1] = 19
    const valor = array[i+6]
    console.log('V. ', array[i+1], " e ", valor)
    //19 e 9
    
    i+=1
    array[i] = array[i-1]
    console.log('VI. ', array[i])
    //3
    
    i = array.length - 1
    array[i] = array[i-3]
    const resultadoC = array[i]%array[1]
    console.log('VII. ', resultadoC)

    //1


    */




//a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

/*let temperaturaF = 77
const calculo = (temperaturaF - 32)*5/9 + 273.15
console.log ("A temperatura em Kelvin é " + calculo)
*/

//resposta no console A temperatura em Kelvin é 298.15





/*b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
let temperaturaC = 80
const calculo = ((temperaturaC)*9/5)+32
console.log ("A temperatura em Fahrenheit é " + calculo) 
// resposta no console: A temperatura em Fahrenheit é 176*/




// c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.


/*const temperaturaC = 30
const calculoFahrenheit = (temperaturaC)*9/5 + 32
const calculoKelvin = temperaturaC + 273.15
console.log (calculoKelvin)
console.log ("A temperatura em Fahrenheit é  " + calculoFahrenheit + " e em Kelvin é "+ calculoKelvin)

//resposta no console A temperatura em Fahrenheit é  86 e em Kelvin é 303.15*/

/* d.

let temperaturaCliente = (prompt("Qual a temperatura em Celsius?"))
const calculoFahrenheit = ((temperaturaCliente)*9/5) +32
console.log ("A temperatura convertida de Celsius para fahrenheit é  " + calculoFahrenheit)
//resposta no console A temperatura convertida de Celsius para fahrenheit é  59
*/
/*let temperaturaCliente2 =(prompt("Qual a segunda temperatura em Celsius?"))
const calculoKelvin = Number(temperaturaCliente2) + 273.15
console.log ("A temperatura convertida de Celsius para kelvin é  " + calculoKelvin)

//resposta no console A temperatura convertida de Celsius para kelvin é  292.15
*/


 //2.
 /*
let serieFavorita = (prompt("Qual a sua série Favorita?"))
console.log ("Resposta:" + serieFavorita)
let corFavorita = (prompt("Qual sua cor favorita?"))
console.log ("Resposta:" + corFavorita)
let bandaFavorita =(prompt("Qual sua banda favorita?"))
console.log ("Resposta:" + bandaFavorita)
let jogoFavorito = (prompt("Qual seu jogo favorito?"))
console.log ("Resposta:" + jogoFavorito)
let casa = (prompt("Onde você mora?"))
console.log ("Resposta:" + casa)

*/


/*const valorKilowatts = 0.05
let consumoCasa = Number(prompt("Qual foi o seu consumo nesse mês?"))
let somatorio = consumoCasa*valorKilowatts
console.log ("O valor a ser pago por essa residencia é " +somatorio +"reais")

*/


/*a.
const valorKilowatts = 0.05
let consumoCasa = 280
let valorFinalCasa = valorKilowatts*consumoCasa
console.log ("O valor a ser pago por essa casa é "+ valorFinalCasa + "reais")
*/



/*b.
const valorKilowatts = 0.05
let consumoCasa = 280
let valorFinalCasa = valorKilowatts*consumoCasa
let desconto = 0.15
let valorComDesconto = valorFinalCasa-desconto
console.log("O valor da casa com desconto fica em "+ valorComDesconto)

*/

