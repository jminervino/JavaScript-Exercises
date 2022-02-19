function lerNumeroExtenso(num) {
    switch (num) {
        case 1:
            return "Um"
            break;
        case 2:
            return "Dois"
            break;
        case 3:
            return "Três"
            break;
        case 4:
            return "Quatro"
            break;
        case 5:
            return "Cinco"
            break;
        case 6:
            return "Seis"
            break;
        case 7:
            return "Sete"
            break;
        case 8:
            return "Oito"
            break;
        case 9:
            return "Nove"
            break;
        case 10:
            return "Dez"
            break;
        default:
            return "Número fora de intervalo"
            break;
    }
}

console.log(lerNumeroExtenso(2));
console.log(lerNumeroExtenso(5));
console.log(lerNumeroExtenso(1));
console.log(lerNumeroExtenso(6));
console.log(lerNumeroExtenso(3));
console.log(lerNumeroExtenso(20));

