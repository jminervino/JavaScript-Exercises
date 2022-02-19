function calcularNotas(vetorNotas) {
    for (let i = 0; i < vetorNotas.length; i++) {
        if (vetorNotas[i] >= 0.0 && vetorNotas[i] <= 4.9) {
            console.log("D");
        } else if (vetorNotas[i] >= 5.0 && vetorNotas[i] <= 6.9) {
            console.log("C");
        } else if (vetorNotas[i] >= 7.0 && vetorNotas[i] <= 8.9) {
            console.log("B");
        } else if (vetorNotas[i] >= 9.0 && vetorNotas[i] <= 10) {
            console.log("A");
        } else {
            console.log("Nota maxima: 10");
        }
    }
}

let notas = [5.0, 4.8, 8.9, 7.9, 3.5, 9.0]
calcularNotas(notas)