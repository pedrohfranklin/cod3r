function formatarValor(decimal){
    valorEmReais = `R$ ${decimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValor(0.2+0.5)