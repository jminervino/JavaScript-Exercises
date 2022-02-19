function fatorar(num) {
    let fatorial = 1
    if (num == 0) {
        return 1
    } else {
        for (let i = num; i !== 0; i--) {
            fatorial *= i
        }
    }
    return fatorial
}

console.log(fatorar(0));
console.log(fatorar(10));
console.log(fatorar(2));
console.log(fatorar(5));
