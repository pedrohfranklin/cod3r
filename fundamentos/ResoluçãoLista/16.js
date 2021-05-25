function calculadora(a, sinal, b){
    switch (sinal){
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a*b
        case '/':
            return a/b
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(1, '+', 2))
console.log(calculadora(1, '-', 2))
console.log(calculadora(1, '*', 2))
console.log(calculadora(1, '/', 2))
console.log(calculadora(1, '++', 2))
