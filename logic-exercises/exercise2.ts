const arrayNumber2 = [ 2, 3, 4, 5, 6, 34, 65,89, 23, 3000]



function turnArrayInObject(array: number[]): Object {

   return {min: Math.min.apply(Math, arrayNumber2), max: Math.max.apply(Math, arrayNumber2)}
}

console.log(turnArrayInObject(arrayNumber2))