function compraCarros(opcao) {
    switch (opcao) {
        case "hatch":
            return "Compra efetuada com sucesso"
            break;
        case "sedan":
            return "Tem certeza de que não prefere este modelo?"
            break;
        case "motocicleta":
            return "Tem certeza de que não prefere este modelo?"
            break;
        case "caminhonete":
            return "Tem certeza de que não prefere este modelo?"
            break;
        default:
            return "Não trabalhamos com esse tipo de automovel aqui"
            break;
    }
}

console.log(compraCarros("caminhonete"));
console.log(compraCarros("hatch"));
console.log(compraCarros("motocicleta"));
console.log(compraCarros("sedan"));
console.log(compraCarros("ford"));
