function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
	let anos=0
	while( alturaMenor < alturaMaior) {
		alturaMenor+= taxaAlturaMenor
		alturaMaior+= taxaAlturaMaior
		anos++
	}
	console.log(anos)
	return anos
}

function crescimento(altura1, taxa1, altura2, taxa2){
	if (altura1 == altura2){
		if(taxa1>taxa2){
			return 'A criança 1 ultrapassará a criança 2 em 1 ano'
		} else if (taxa1<taxa2){
			return 'A criança 2 ultrapassará a criança 1 em 1 ano'
		} else{
			return 'As crianças possuem a mesma altura'
		}
	} else {
		if (altura1>altura2){
			if(taxa1 >= taxa2){
				return 'A criança menor não ultrapassará a criança maior'
			} else {
				return calcularTempo (altura1, taxa1, altura2, taxa2)
			}
		} else {
			if (taxa2>=taxa1){
				return 'A criança menor não ultrapassará a criança maior'
			} else {
				return calcularTempo (altura2, taxa2, altura1, taxa1)
			}
		}
	}
}

console.log(crescimento(150, 2, 150, 2));
console.log(crescimento(150, 2, 130, 4));
