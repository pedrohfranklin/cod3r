function vendaCarro(modelo){
    switch (modelo){
        case 'hatch':
            console.log("Compra efetuada com sucesso")
            break
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            console.log("Tem certeza que não prefere este modelo?")
            break
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui")
            break
    }
}

vendaCarro('hatch')
vendaCarro('sedans')
vendaCarro('motocicletas')
vendaCarro('caminhonetes')
vendaCarro('carro')