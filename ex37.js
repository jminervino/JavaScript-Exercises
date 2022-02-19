function progressaoAritmetica(n, a1, r) {
    let soma = 0
    for (let i = 0; i < n; i++) {
        console.log(a1 + r*i);
        soma+= a1 + r*i
    }
    console.log("Soma: "+soma);
}

function progressaoGeometrica(n, a1, r) {
    let soma = 0
    for(let i = 0; i < n; i++){
        console.log(a1*(Math.pow(r, i)))
        soma+= a1*(Math.pow(r, i))
    }
    console.log("Soma: "+soma);
}

progressaoAritmetica(10, 10, 10)
console.log("-----------------");
progressaoGeometrica(10, 10, 5)