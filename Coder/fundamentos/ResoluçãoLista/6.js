function jurosSimples (capitalInicial, taxaJuros, tempo){
    return capitalInicial + (capitalInicial*taxaJuros*tempo)
}

function jurosComposto (capitalInicial, taxaJuros, tempo){
    return capitalInicial * (1+taxaJuros)  ** tempo
}

console.log (jurosSimples (10000, 20/100, 3));
console.log (jurosComposto (10000, 20/100, 3));