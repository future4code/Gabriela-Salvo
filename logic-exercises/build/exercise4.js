const tipo = typeof "";
let array = [1, 2, 3, "gabi"];
function checkCharacter(a) {
    for (let i = 0; i < array.length; i++) {
        if (typeof (i) !== tipo) {
            return false;
        }
        else {
            return true;
        }
    }
}
console.log(checkCharacter(array));
//# sourceMappingURL=exercise4.js.map