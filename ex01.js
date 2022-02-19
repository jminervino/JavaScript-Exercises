function mostrarValores(x,y){
    console.log(adicao(x,y)); 
    console.log(subtracao(x,y));
    console.log(multiplicacao(x,y));    
    console.log(divisao(x,y));
}

function adicao(x, y) { return x + y }
function subtracao(x, y) { return x - y }
function multiplicacao(x, y) { return x * y }
function divisao(x, y) { return x / y }

mostrarValores(2,5)