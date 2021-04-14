function tipoDeTriangulo(lado1,lado2,lado3){
    if((lado1 == lado2) && (lado2 == lado3)){ //Igualdade tripla não funciona em java script
        return 'Equilatero'
    }else if((lado1==lado2) || (lado2==lado3) || (lado1 == lado3)){
        return 'Isóceles'
    }else{
        return 'Escaleno'
    }
}

console.log(tipoDeTriangulo(10,10,10))
console.log(tipoDeTriangulo(10,1,10))
console.log(tipoDeTriangulo(10,10,1))
console.log(tipoDeTriangulo(1,10,10))
console.log(tipoDeTriangulo(9,10,8))