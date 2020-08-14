function negativos(array: Array<Array<number>>){
    let arrayNegativos = 0
    let qtd = array.length;
      for(let i = 0; i < array.length; i++) {
        const arrayInterno = array[i]
        for(let j = 0; j < arrayInterno.length; j++) {
         if(arrayInterno[j] < 0){
           arrayNegativos = arrayNegativos + 1
