function receiveString(phrase) {
    const phraseValue = phrase.split("");
    const phraseLenght = {
        lenght: phrase.length,
        firstCaracter: phrase[0],
        phrase: phraseValue,
        lastCaracter: phrase[phrase.length - 1]
    };
    return phraseLenght;
}
console.log(receiveString("Jogar um videogame, beber um café...molhar minhas plantinhas no Animal Crossing"));
const returnSplitPhrase = (a) => {
    const splitedPhrase = a.split("");
    return splitedPhrase;
};
console.log(returnSplitPhrase("Jogar the last of us part2 hoje viu"));
//# sourceMappingURL=exercise2.js.map