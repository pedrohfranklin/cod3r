function bissexto (ano){
    if (ano <=0){
        console.log (`${ano} não é um ano válido`)
        return false
    } else if(ano % 400 ==0){
        console.log (`${ano} é bissexto`);
    } else if(ano % 4 ==0){
        console.log (`${ano} é bissexto`);
    } else if(ano % 100 == 0){
        console.log (`${ano} não é bissexto`);
    } else{
        console.log (`${ano} não é bissexto`);
    }
}
bissexto (2020)
bissexto (2021)
bissexto (2022)
bissexto (2023)
bissexto (2024)
bissexto (2025)
bissexto (2026)
bissexto (2027)

