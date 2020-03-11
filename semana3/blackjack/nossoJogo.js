import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA


console.log("Bem vindo")



if(confirm("Você quer jogar? ")){
   const user = prompt("Digite aqui seu nome")

      const cartaUser = comprarCarta()
      const cartaUser1 = comprarCarta()
      console.log(user, " ",  "suas cartas são", " ", cartaUser.texto,"e",  " ", cartaUser1.texto)

      const pc = "Computador"
      const cartaPc = comprarCarta()
      const cartaPc1 = comprarCarta()
      console.log (pc, " ",  "suas cartas são", " ", " ", cartaPc.texto," ", "e",  " ", " ", cartaPc1.texto," ")

      confirm("As cartas que você tirou" + cartaUser.texto + "e" + cartaUser1.texto + "E as cartas do computador são" + cartaPc.texto + "e" + cartaPc1.texto)

      console.log("As cartas que você tirou" + cartaUser.texto + "e" + cartaUser1.texto + "E as cartas do computador são" + cartaPc.texto +" ",  "e",  " "+ cartaPc1.texto ," ", " A soma das cartas foi ", " ", cartaUser.valor+cartaUser1.valor )
      console


   if (cartaUser.valor + cartaUser1.valor === cartaPc.valor + cartaPc1.valor){
      confirm("Vocês empataram!")
   }else if (cartaUser.valor + cartaUser1.valor < cartaPc.valor + cartaPc1.valor) {
      confirm("O pc venceu!" , cartaUser.valor +cartaUser1.valor)
   }else {
      confirm(user + " ganhou" , cartaUser.valor +cartaUser1.valor)
   }
}else {
   confirm("Game over")

}
 







