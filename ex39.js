let vetor1 = [4, 5, 6, 8]
let vetor2 = [6, 8, 3, 7]
function trocaValores(vetor1, vetor2) {
    if (vetor1.length == vetor2.length) {
        for (let i = 0; i < vetor1.length; i++) {
            vetor1[i] = vetor1[i] + vetor2[i]
            vetor2[i] = vetor1[i] - vetor2[i]
            vetor1[i] = vetor1[i] - vetor2[i]
        }
    } else {
        return "Vetores com tamanhos diferentes!"
    }

    console.log("novo vetor A "+vetor1);
    console.log("novo vetor B "+vetor2);
}

trocaValores(vetor1, vetor2)