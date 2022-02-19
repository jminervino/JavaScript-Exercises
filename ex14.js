function verifyFruit(fruit) {
    switch (fruit) {
        case "Maçã":
            return "Não vendemos essa fruta aqui."
            break;
        case "Kiwi":
            return "Estamos com escassez de kiwis"
            break;
        case "Melancia":
            return "Aqui está, são 3 reais o quilo"
            break
        default:
            return "ERRO"
            break;
    }
}

console.log(verifyFruit("Maçã"));
console.log(verifyFruit("Kiwi"));
console.log(verifyFruit("Melancia"));
console.log(verifyFruit("Abaxaci"));
