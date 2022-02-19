function transformReal(valor){
    const result = valor.toFixed(2).replace(".",",")
    console.log(`R$ ${result}`);
}

transformReal(2)