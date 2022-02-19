function pagarPlanoDeSaude(idade){
    valorPlano = 100
    if(idade<10){
        valorPlano=+80
    } else if(idade>=10 && idade <= 30){
        valorPlano=+50
    } else if(idade>30 && idade <=60){
        valorPlano+=95
    } else {
        valorPlano=+130
    }
    return `R$${valorPlano} valor total a ser pago pelo plano de saude`
}
 
console.log(pagarPlanoDeSaude(45));