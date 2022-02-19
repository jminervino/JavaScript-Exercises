function classifica(a = 0,b = 0,c = 0){
    if(a == b && b == c){
        console.log("Equilatero");
    } else if(a != b && b != c && a != c){
        console.log("Escaleno"); 
    } else {
        console.log("Isosceles");
    }
}

classifica(2,2,3)