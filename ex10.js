function verificaInteiro(num) {
    return Number.isInteger(num)
}

function verificaInteiroAntigo(num) {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}

console.log(verificaInteiro(4));
console.log(verificaInteiro(4.0));
console.log(verificaInteiroAntigo(4.9));
console.log(verificaInteiroAntigo(3.9));
