const pessoa = { nome: 'Pedro'}
pessoa.nome = 'João'
//console.log(pessoa)


Object.freeze(pessoa)

pessoa.nome = "maria"
//console.log (pessoa.nome)

pessoa.end = 'Rua ABC'

console.log (pessoa.nome)
console.log (pessoa.end)
console.log (pessoa)
