function maiorMenor(vetor){
	let maior
	let menor
	for (let i = 0; i < vetor.length; i++) {
		if (maior === undefined && menor === undefined){
			maior = vetor[i]
			menor = vetor[i]
		} else {
			if (vetor[i] > maior){
				maior = vetor[i]
			} else if(vetor[i] < menor){
				menor = vetor[i]
			}
		}
	}
	return [menor, maior]
}

vetor = [34,26,54,76,32,23,75,23,865,43,65,12,54,65,12,86, 'teste']

console.log(maiorMenor(vetor))