function qualEra(ano, era) {
    if (ano > 4000 && era === "AC") {
        return "Pré história";
    }
    else {
        return "Idade Antiga";
    }
}
console.log(qualEra(5000, "AC"));
