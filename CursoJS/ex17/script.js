function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[Erro] Faltando dados!')
    }else{
    res.innerHTML = 'Contando: '
    // Conventendo os valores em numeros 
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if(i < f){
        //contagem crescente
        for(var c = i; c <= f; c +=p){
        res.innerHTML += `${c} \u{1f449}`
    } 
    res.innerHTML += `\u{1f3c1}`
    }else {
        //contagem degrecente
        for(var c = i; c >= f; c -=p){
            res.innerHTML += `${c}\u{1f449}`
        }
    }
    res.innerHTML += `\u{1f3c1}`
    }
}