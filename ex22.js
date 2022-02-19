//anuidade deev ser paga em janeiro
//5% cobrado por mês

function calculaAnuidade(mes, valor) {
    if (mes > 0 && mes < 13) {
        let montante = (valor * (Math.pow((1 + (5 / 100)), mes))).toFixed(2)
        return montante
    } else {
        return "Mês invalido"
    }
    
}

console.log(calculaAnuidade(12, 100)); 