function verificarPlano(plano, salario) {
    let taxa
    switch (plano) {
        case "A":
            taxa = salario * (10 / 100)
            return salario + taxa
            break;
        case "B":
            taxa = salario * (15 / 100)
            return salario + taxa
            break
        case "C":
            taxa = salario * (20 / 100)
            return salario + taxa
            break
        default:
            return "Plano invalido"
            break;
    }
}

console.log(verificarPlano("A", 1500));
console.log(verificarPlano("B", 1500));
console.log(verificarPlano("C", 1500));
console.log(verificarPlano("D", 1500));
