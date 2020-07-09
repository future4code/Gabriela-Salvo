
   const tipo = typeof "" 
    let array =[1,2,3, "gabi"]
   
    function checkCharacter(a:any):any{
        for(let i = 0; i < array.length; i++) {
            if(typeof(i)!== tipo){
                return false
            }else {
                return true
            }
            
        }

    }

    console.log(checkCharacter(array))
