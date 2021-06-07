let inteiro = [2, 4, 1, 2]
let string = ['Pedro', 'João', 'Paulo', 'Pedra']
let double = [2.3, 2.4, 3.2, 1.2]

function concatenar (..._args){
	resultado =[]
	for (let i = 0; i < arguments.length; i++) {
		resultado = resultado.concat(arguments[i])
		
	}
	return resultado;
}

console.log(concatenar(inteiro, double))
console.log(concatenar(double, string))