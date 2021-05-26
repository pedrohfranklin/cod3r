function planoTrabalho(salarioAtual, plano){
    switch(plano){
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido'
    }
}

console.log(planoTrabalho(1000, 'A'))
console.log(planoTrabalho(1000, 'B'))
console.log(planoTrabalho(1000, 'C'))
console.log(planoTrabalho(1000, 'D'))