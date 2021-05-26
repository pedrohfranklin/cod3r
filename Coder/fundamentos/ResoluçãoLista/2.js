function ladoTri(a, b, c){
    if (a == b && b == c) {
        return "Equilátero"
    }
    else if (a == b || b == c || a == c) {
        return "Isóceles"
    } else {
        return "Escaleno"
    }
}

console.log(ladoTri(2, 2, 2))
console.log(ladoTri(2, 3, 2))
console.log(ladoTri(2, 3, 4))