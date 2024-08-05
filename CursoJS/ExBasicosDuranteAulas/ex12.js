//CONDIÇÔES ANINHADAS

var agora = new Date()
var hora = agora.getHours() // linha para pegar a hora atual no sistema 
console.log(`Agora são ${hora} horas`)
if(hora < 12 ){
    console.log('Bom Dia')
}
else if (hora <= 18){
    console.log('Boa Tarde')
}
else{
    console.log('Boa Noite')
}