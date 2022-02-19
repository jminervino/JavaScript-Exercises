function numsIntervalados(num1 = 0, num2 = 100) {
    let num3
    if (num1 == num2) {
        return "Os números são iguais!"
    } else if (num1 < 0 || num2 < 0) {
        return "Não é permitido números negativos"
    } else {
        if (num1 > num2) {
            num3 = num1
            num1 = num2
            num2 = num3
        }
        criaLogica(num1, num2)
    }

}

function criaLogica(num1, num2) {
    for (let i = num1; i < num2; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}

numsIntervalados(100, 10)