function arredondar(nota) {
    if (nota % 5 > 2) {
        return Math.ceil(nota / 5) * 5
    } else {
        return nota
    }
}

function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota: ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota: ${notaCorrigida}`);
    }
}


classificaAluno(38)
classificaAluno(37)
classificaAluno(97)
classificaAluno(98)