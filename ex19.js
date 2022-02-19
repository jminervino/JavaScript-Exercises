function restaurante(codigo, qntProduto) {
    let valor
    switch (codigo) {
        case 100:
            return valor = 3.00 * qntProduto
            break;
        case 200:
            return valor = 4.00 * qntProduto
            break;
        case 300:
            return valor = 5.50 * qntProduto
            break;
        case 400:
            return valor = 7.50 * qntProduto
            break;
        case 500:
            return valor = 3.50 * qntProduto
            break;
        case 600:
            return valor = 2.80 * qntProduto
            break;
        default:
            return "Produto não existe"
            break;
    }
}

console.log(restaurante(100, 2));
console.log(restaurante(200, 3));
console.log(restaurante(300, 1));
console.log(restaurante(800, 1));

