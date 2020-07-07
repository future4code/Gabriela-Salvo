
//a
function receiveString(phrase: string): object {
   const phraseValue = phrase.split("")
   const phraseLenght = {
      lenght: phrase.length,
      firstCaracter: phrase[0],
      phrase: phraseValue,
      lastCaracter: phrase[phrase.length-1]
   }


   return phraseLenght
}


console.log(receiveString("Jogar um videogame, beber um café...molhar minhas plantinhas no Animal Crossing"))


//b


const returnSplitPhrase=(a:string)=>{
   const splitedPhrase = a.split("")

   return splitedPhrase

}

console.log(returnSplitPhrase("Jogar the last of us part2 hoje viu"))