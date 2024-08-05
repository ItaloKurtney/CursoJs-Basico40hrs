var valores = [3,5,2,6,4,1]
// Forma simples
console.log(valores)   
//forma para mostrar as posições e os valores da arrays
/*
for(var pos=0; pos < valores.length ; pos ++){
        console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    }
*/
//forma mais simplificada,Para cada posição em num mostre o num/pos
for(var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

