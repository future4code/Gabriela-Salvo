/*Escreva uma função que recebe um array de números nums e um target e retorna os indíces dos dois elementos que somam o valor do target.*/ 



function sumNumbers ():any {
    const nums:any=[1,5,3,8,4]
    const target:any=[11]

    for(let i = 0; i < nums.length; i++) {
        nums.forEach(element => {
            element + [i] === target
            
        });

        
    }

}
console.log(sumNumbers())

// nums.reduce()

// // nums.forEach()

// // for(let i = 0; i< nums.length; i++) {

// //    nums.forEach((i, nums)=>{
// //        if(i !== target) {

// //        }

// //    })


// // }