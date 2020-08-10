let arrayNumber4 = [1, 2, 2, 3, 4, 5];
let emptyArray = [];
function returnOneNumber(array) {
    for (let i = 0; i < array.length; i++) {
        let arrayPercorrido = array[i];
        if (array.indexOf(arrayPercorrido) - 1) {
            emptyArray.push(arrayPercorrido);
            console.log(emptyArray);
        }
    }
}
console.log(returnOneNumber(arrayNumber4));
//# sourceMappingURL=exercise_10_08.js.map