function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por favor,digite um numero')
    }else{
        var nu = Number(num.value)
        tab.innerHTML = ''
        for(c =1 ; c <=10;c ++){
            var item = document.createElement('option')
            item.text = `${nu} x ${c} = ${nu * c}`
            tab.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}