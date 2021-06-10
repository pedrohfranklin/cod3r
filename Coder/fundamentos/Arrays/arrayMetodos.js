const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Remove último elemento
console.log(pilotos)

pilotos.shift() // Remove o primeito elemento
console.log(pilotos)

pilotos.push('Verstappen')// Adiciona elemento na última posição do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona elemento na primeira posição do array
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') // Adicionando dois elementos
console.log(pilotos)

pilotos.splice(3, 1) // Removendo UM elemento a partir do índice TRÊS
console.log(pilotos) 

const algunsPilotos1 = pilotos.slice(2) // Retorna um novo array a partir do índice DOIS
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Retorna um novo array a partir do índice UM, até o índice 4-1
console.log(algunsPilotos2)