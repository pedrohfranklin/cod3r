function conta(codigo, quantidade){
    switch(codigo){
        case 100:
            return quantidade * 3
        case 200:
            return quantidade * 4
        case 300:
            return quantidade * 5.5
        case 400:
            return quantidade * 7.5
        case 500:
            return quantidade * 3.5
        case 600:
            return quantidade * 2.8
        default:
            return 'Esse produto não existe'
    }
}

console.log(conta(90, 10))
console.log(conta(100, 10))
console.log(conta(200, 10))
console.log(conta(300, 10))
console.log(conta(400, 10))
console.log(conta(500, 10))
console.log(conta(600, 10))
console.log(conta(700, 10))
