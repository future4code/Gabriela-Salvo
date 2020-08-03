/*
- Para a entrada `[1, 2, 3, ... , 45, 46, 48, 49, ... , 100]`, o retorno deve ser `47`
- Para a entrada `[1, 2, 3, ... , 69, 71, 72, ... , 100]`, o retorno deve ser `70`

Além disso, faça, ao menos, **dois testes automatizados** da sua função.

*/ 



export const numeroFaltante = (arr: number[]): number => {
    const somaDoArray = 55;
    let soma = 0;
    for (const num of arr) {
      soma += num;
    }
    return somaDoArray - soma;
  };