function valorCedulas(valorSaque) {
    let contadorCem = 0
    let contadorCinquenta = 0
    let contadorDez = 0
    let contadorCinco = 0
    let contadorUm = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                contadorCem++
                valorSaque -= 100
                break;
            case 50:
                contadorCinquenta++
                valorSaque -= 50
                break;
            case 10:
                contadorDez++
                valorSaque -= 10
                break;
            case 5:
                contadorCinco++
                valorSaque -= 5
                break;
            case 1:
                contadorUm++
                valorSaque -= 1
                break;
            default:
                break;
        }
        
        valorNota = calcularValorNota(valorSaque)
    }
    return elaborarResultado(contadorCem, contadorCinquenta, contadorDez, contadorCinco, contadorUm)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}


function elaborarResultado(contadorCem, contadorCinquenta, contadorDez, contadorCinco, contadorUm){
    let resultado = ""

    if(contadorCem > 0){
        resultado += `${contadorCem} nota(s) de R$ 100.`
    }

    if(contadorCinquenta > 0){
        resultado += `${contadorCinquenta} nota(s) de R$ 50.`
    }

    if(contadorDez > 0 ){
        resultado += `${contadorDez} nota(s) de R$ 10.`
    }

    if(contadorCinco > 0 ){
        resultado += `${contadorCinco} nota(s) de R$ 5.`
    }

    if(contadorUm > 0 ){
        resultado += `${contadorUm} nota(s) de R$ 1.`
    }
}

valorCedulas(200)