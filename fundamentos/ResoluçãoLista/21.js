function planoSaude(idade){
    if(idade<10){
        return 180
    } else if (idade<30){
        return 150
    } else if (idade <60){
        return 195
    } else {
        return 230
    }
}

console.log(planoSaude(5))
console.log(planoSaude(25))
console.log(planoSaude(45))
console.log(planoSaude(70))