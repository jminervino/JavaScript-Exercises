function primeiraFunction(vetor, num = 1) {
    let newArray = []
    newArray = vetor.map(indice => {
        return indice * num
    })
    return newArray
}

function segundaFunction(vetor, num) {
    let newArray = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5) {
            newArray.push(vetor[i] * num)
        }
    }
    return newArray
}


let vetor = [5, 7, 3, 7, 4, 1, 2, 6, 8, 10]
console.log(segundaFunction(vetor, 5));


