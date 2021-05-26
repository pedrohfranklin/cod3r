function arredondar(nota) {
  if (nota % 5 > 2) {
    return nota + (5 - (nota % 5));
  }else{
      return nota
  }
}

function classifica(nota) {
    let notaCorrigida=arredondar(nota)
    if(notaCorrigida >= 40){
        console.log(`aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`reprovado com nota ${notaCorrigida}`);
    }
}

classifica(100)
classifica(30)
classifica(38)
classifica(88)
classifica(12)
