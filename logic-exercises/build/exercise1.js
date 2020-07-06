const arrayNumber = [1, 2, 3, 4, 5, 6, 7];
function returnObject(array) {
    let mult = 1;
    let sum = 0;
    let arrayLength = arrayNumber.length;
    for (let i = 0; i < arrayNumber.length; i++) {
        mult *= arrayNumber[i];
        sum += arrayNumber[i];
    }
    return { soma: sum, multi: mult, length: arrayLength };
}
console.log(returnObject(arrayNumber));
//# sourceMappingURL=exercise1.js.map