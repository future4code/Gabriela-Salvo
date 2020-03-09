//EXERCICIO 1

/*

a) retorna []
b) retorna [0,1,0,1,2,3]
c)[0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

*/


//EXERCICIO 2

/*
a) [0,2, undefined]
b) funciona pois chamaremos o indice dentro da função

*/


//EXERCÍCIO 3

/* 

function somaEMultiplicaIndice(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];
  
    for (let x of array) {
      resultadoA += x;
      resultadoB *= x;
    }
  
    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
  }

  let resultado = somaEMultiplicaIndice([2, 3])
  console.log (resultado)


  ela pega o valor, soma e multiplica e coloca da um push dentro de array vazio

  */

//EXERCICIO 4


/*a) let anosHumanos = (idadeHumano)=> {
    let idadeCanina = idade * 7
    return idadeCanina
}
console.log (anosHumanos(15))

*/


function  parametros (a, b, c, d){
   
    if(d ===true){
        console.log (" eu sou "+ a+ " tenho "+ b+ " moro em " +c+ " e sou estudante ") 
        
    }else  {
        console.log ("eu sou " + a + " tenho "+ b+ " moro em " +c+ " e não sou estudante ") 
    }
    return parametros
    
    
}parametros("Gabriela ", " 28 ", " RJ ",  true)

