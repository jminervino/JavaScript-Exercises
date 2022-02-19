function verifyDayWeek(day) {
    switch (day) {
        case 1:
            return "Fim de Semana"
            break;
        case 2:
            return "Dia útil"
            break;
        case 3:
            return "Dia útil"
            break;
        case 4:
            return "Dia útil"
            break;
        case 5:
            return "Dia útil"
            break;
        case 6:
            return "Dia útil"
            break;
        case 7:
            return "Fim de Semana"
            break;
        default:
            return "Dia Invalido!"
            break;
    }
}

console.log(verifyDayWeek(1));
console.log(verifyDayWeek(2));
console.log(verifyDayWeek(3));
console.log(verifyDayWeek(4));
console.log(verifyDayWeek(5));
console.log(verifyDayWeek(6));
console.log(verifyDayWeek(7));
console.log(verifyDayWeek(8));
