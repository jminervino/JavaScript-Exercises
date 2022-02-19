function calcularMedia(codAluno, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1, nota2, nota3)
    notas.sort((a, b) => a < b ? 1 : -1)
    let media = ((notas[0] * 4 + notas[1]*3 + notas[2]*3) / 10) 
    console.log(media); 
    if(media>=5){
        return `Aluno ${codAluno} Aprovado com nota ${media}`
    } else if(media<5){
        return `Aluno ${codAluno} Reprovado com nota ${media}`
    }
}

console.log(calcularMedia(123, 10, 10, 10));