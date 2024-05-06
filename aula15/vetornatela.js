let valores = [8, 1, 7, 4, 2, 9]

let testevalores = [7, 6, 3, 5, 8, 12]



console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/
/*for(let pos=0 ; pos < valores.length ; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for(let posi = 0 ; posi < testevalores.length ; posi ++) {
    console.log(`À posição dele no meu teste é ${posi} tem os valores ${testevalores[posi]}`)
}
*/

for(let pos in testevalores) {
    console.log(`À posição ${pos} tem o valor ${testevalores[pos]}`)
}