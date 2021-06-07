const obj1 = {}
console.log (obj1)

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

function Produto(nome, preco, desc){
	this.nome = nome
	this.getPrecoComDesconto = () => {
		return preco*(1-desc)
	}
}

const p1 = new Produto('Caneta', 7.99, 0.13)
const p2 = new Produto('Notebook', 72.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


function criarFuncionario(nome, salarioBase, faltas){
	return{
		nome,
		salarioBase,
		faltas,
		getSalario(){
			return(salarioBase/30)*(30-faltas)
		}
	}
}

const f1 = criarFuncionario ('João', 5450, 3)
const f2 = criarFuncionario ('Pedro', 11540, 6)
console.log(f1.getSalario(), f2.getSalario())


