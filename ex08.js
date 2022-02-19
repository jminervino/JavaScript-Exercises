let pontos = "2, 20, 40, 64, 40, 20, 1, 50"

function avaliaPontos(pontos) {
    let listaPontos = pontos.split(", ")
    let qtRecordesQuebrados = 0
    let piorJogo = 0
    let maiorPonto = listaPontos[0]
    let menorPonto = listaPontos[0]
    
    for (let i = 1; i < listaPontos.length; i++) {
        if (listaPontos[i] > maiorPonto) {
            maiorPonto = listaPontos[i]
            qtRecordesQuebrados++
        } else if (listaPontos[i] < menorPonto) {
            menorPonto = listaPontos[i]
            piorJogo = i+1
        }
    }
    return [qtRecordesQuebrados, piorJogo]
}

console.log(avaliaPontos(pontos));