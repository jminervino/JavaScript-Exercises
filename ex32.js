function mediaVetor(vetor){
    let media = 0
    vetor.forEach(element => {
        media+=element
    });
    return media/vetor.length
}

let vetor = [2, 4, 16, 7, 8]
console.log(mediaVetor(vetor));