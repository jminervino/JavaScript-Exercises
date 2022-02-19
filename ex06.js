function jurosSimples(capitalIni, juros, temp) {
    const result = capitalIni * (juros / 100) * temp
    console.log(`O valor total do juros simples sera: R$${result.toFixed(2).replace(".", ",")}`);
}

function jurosComposto(capitalIni, juros, temp) {
    const montante = (capitalIni * (Math.pow((1 + (juros / 100)), temp))).toFixed(2)
    console.log(montante);
}

jurosSimples(25000, 10, 5)
jurosComposto(10000, 6, 11)