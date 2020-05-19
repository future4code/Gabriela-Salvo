function qualEra(ano, era) {
    if (ano > 4000 && era === "AC") {
        return "Pré história";
    }
    else if (ano < 4000 && era === "AC") {
        return "Idade Antiga";
    }
    else if (ano > 476 && era === "AC") {
        return "Idade média";
    }
    else if (ano < 476 && era === "AC")
        return "";
}
console.log(qualEra(1, "AC"));
// console.log(qualEra(5000, "AC"))
// function qualEra (ano:number, era:string):string {
//     switch(era){
//         case "AC"
//         if(ano > 4000) {
//             ano= "Pré-historia"
//         }
//     }
// }
