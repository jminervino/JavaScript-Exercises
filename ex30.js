let vetor = [10, 34, 56, 24, 5, 26, 47, 1]
let maiorNum = 0
let menorNum = vetor[0]
for (let i = 0; i < vetor.length; i++) {
    if(vetor[i]>maiorNum){
        maiorNum = vetor[i]
    }
    if(vetor[i] < menorNum){
        menorNum = vetor[i]
    }
}

console.log(maiorNum+" é o maior número da Array");
console.log(menorNum+" é o menor número da Array");