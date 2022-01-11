let valores = [8, 6, 3, 4, 7, 5]
valores.sort()
//console.log(valores)   1ºforma

/*
2ºforma

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//3º forma
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}