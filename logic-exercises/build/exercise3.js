function toEqual(a, b) {
    if (a === b || b === a) {
        return "strings iguais";
    }
    else {
        return "strings diferentes";
    }
}
console.log(toEqual("Escola", "escola"));
function toEqual2(a, b) {
    if (a.toLowerCase() === b.toLowerCase()) {
        return "strings iguais";
    }
    else {
        "strings diferentes";
    }
}
console.log(toEqual2("gaBI", "GABI"));
//# sourceMappingURL=exercise3.js.map