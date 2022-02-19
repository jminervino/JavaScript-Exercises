function dividir(dividendo, divisor){
    const resto = dividendo % divisor
    const result = dividendo / divisor
    console.log(resto);
    console.log(result.toFixed(2));
}

dividir(10,3)