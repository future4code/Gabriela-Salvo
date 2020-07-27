
interface oneEditInterface {
    [index: string] :string
}


function checkPhrase(string1:string, string2:string):boolean {
    if(string1.length < string2.length -1 || string1.length > string2.length +1) {
        return false
    }

    let countedString = 0

    for (let letter of string2) {
        if(string1.indexOf(letter)!== -1) {
            countedString++
        }
    }
    return (
        countedString <= string1.length + 1 &&
        countedString  >= string2.length - 1
    )
    
    
}