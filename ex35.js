let vetorPilha = [1, 2, 3, 4, 5,]
let vetorAdiciona = [6, 7, 8, 9, 10]

for (let i = 0; i < vetorAdiciona.length; i++) {
  vetorPilha = vetorPilha.concat(vetorAdiciona[i])
}
 
console.log(vetorPilha);
console.log(vetorPilha[7]);