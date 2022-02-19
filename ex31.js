function verificaVetor(vetor){
    let numNegativos = 0
    let numPositivos = 0
    for(let i = 0; i < vetor.length;i++){
        if(vetor[i] < 0){
            numNegativos++
        } else {
            numPositivos++
        }
    }
    return `${numNegativos} Números negativos e ${numPositivos} Números positivos!`
}


let vetor = [-1, 2, 5, 6, -6, 2, -7, -8, -10]
console.log(verificaVetor(vetor))