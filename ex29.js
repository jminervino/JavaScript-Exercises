let vetor = [1, 5, 10, 13, 16, 27, 20, 18, 25]
let dentroDoIntervalo = 0
let foraDoIntervalo = 0
for(let i = 0; i < vetor.length; i++){
    if(vetor[i] >= 10 && vetor[i] < 20){
        dentroDoIntervalo++
    } else {
        foraDoIntervalo++
    }
}

console.log(dentroDoIntervalo+" Números do array dentro do intervalo de 10 e 20");
console.log(foraDoIntervalo+" Números do array fora do intervalo de 10 e 20");