function verificaAltura(altura1, taxa1, altura2, taxa2) {
    if (altura1 > altura2) {
        if (taxa1 > taxa2) {
            return "A menor criança não vai ultrapassar a maior"
        } else {
            return `Em ${calculaTempo(altura2, altura1, taxa1, taxa2)} anos a criança menor, ultrapassará a maior`
        }
    } else if (altura2 > altura1) {
        if (taxa2 > taxa1) {
            return "A menor criança não vai ultrapassar a maior"
        } else {
            return `Em ${calculaTempo(altura1, altura2, taxa2, taxa1)} anos a criança menor, ultrapassará a maior`
        }
    } else {
        if (taxa1 > taxa2) {
            return `A 1° Criança vai ultrapassar a 2° em 1 ano`
        } else if (taxa2 > taxa1) {
            return `A 2° Criança vai ultrapassar a 1° em 1 ano`
        } else {
            return 'Não existe criança menor'
        }
    }
}

//Faz um looping ate a criança menor ultrapassar a maior, e retorna em quantos anos isso acontece!
function calculaTempo(criancaMenor, criancaMaior, menorTaxa, maiorTaxa) {
    let anos = 0
    while (criancaMenor <= criancaMaior) {
        criancaMenor += maiorTaxa
        criancaMaior += menorTaxa
        anos++
    }
    return anos
}

console.log(verificaAltura(1.10, 0.10, 1.10, 0.10));