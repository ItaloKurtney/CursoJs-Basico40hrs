function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.lenght == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e digite novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada : ${idade}` ver se esta funcionado
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //CRIANCA
                img.setAttribute('src','imgs/bebem.jpg')
            }
            else if(idade < 21){
                //JOVEM
                img.setAttribute('src','imgs/garoto.jpg')
            } 
            else if(idade <50){
                //ADULTO
                img.setAttribute('src','imgs/homema.jpg')
            }
            else{
                //IDOSO
                img.setAttribute('src','imgs/homemidoso.jpg')
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //CRIANCA
                img.setAttribute('src','imgs/bebef.jpg')
            }
            else if(idade < 21){
                //JOVEM
                img.setAttribute('src','imgs/garota.jpg')
            } 
            else if(idade <50){
                //ADULTO
                img.setAttribute('src','imgs/mulhera.jpg')
            }
            else{
                //IDOSO
                img.setAttribute('src','imgs/mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}