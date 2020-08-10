let arrayNumber4: any = [1, 2, 2, 3, 4, 5];
let emptyArray: any = [];

function returnOneNumber(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let arrayPercorrido = array[i];
    // console.log(arrayPercorrido)
    if(array.indexOf(arrayPercorrido) -1){
        emptyArray.push(arrayPercorrido)
        console.log(emptyArray)
    }
  }
}
console.log(returnOneNumber(arrayNumber4));
