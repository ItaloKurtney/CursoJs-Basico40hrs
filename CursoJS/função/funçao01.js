//Função para saber se um numero é oar ou impar
function parouimpar(n){ // parametro
    if(n %2==0)
        return 'par' //retornos
    else{
        return 'impar' //retornos
    }
}
var res = parouimpar(11) // chamada
console.log(`O numero escolhido é ${res}`)