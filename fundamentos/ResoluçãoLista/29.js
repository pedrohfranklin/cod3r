function intervalo(vetor){
	numerosIntervalo = 0;
	for (let i = 0; i<vetor.length; i++){
		if (vetor[i]>=10 && vetor[i]<=20){
			numerosIntervalo++
		}
	}
	return `${numerosIntervalo} números dentro do intervalo`
}

vetor = [1,3,5,65,12,34,23,16,26,32,12,11,23,22]

console.log(intervalo(vetor))