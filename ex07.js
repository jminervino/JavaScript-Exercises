function delta(ax2, bx, c){
    const delta  = (Math.pow(bx,2) - (4 * ax2 * c))
    const resultados = []
    if(delta < 0 ){
        return "Delta é negativo";
    }

    let x1 = (-bx + Math.sqrt(delta) / 2 * ax2)
    let x2 = (-bx - Math.sqrt(delta) / 2 * ax2)
    resultados.push(x1, x2)
    return resultados;
}

console.log(delta(3, -5, 12));
console.log(delta(1, 3, 2));

