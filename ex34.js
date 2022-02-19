function recebeString(string1, string2) {
    let vetor = []
    for (let i = 0; i < string1.length; i++) {
        for (let c = 0; c < string2.length; c++) {
            let caractereString2 = string2.charAt(c).toLowerCase()
            if(string1[c] == string2[c]){
                return true
            } else{
                return false
            }
        }
    }
    return vetor
}

console.log(recebeString("gleuber","e"));