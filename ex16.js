function calculadora(x = 1, y = 1, operador) {
    switch (operador) {
        case "adicao":
            return x + y
            break;
        case "subtracao":
            return x - y
            break;
        case "multiplicacao":
            return x * y
            break;
        case "divisao":
            return x / y
            break;
        default:
            return "Operação Invalida"
            break;
    }
}

console.log(calculadora(4, 5, "adicao"));
console.log(calculadora(10, 5, "subtracao"));
console.log(calculadora(10, 5, "multiplicacao"));
console.log(calculadora(10, 2, "divisao"));
console.log(calculadora(10, 2, "raiz"));
console.log(calculadora("adicao"));




