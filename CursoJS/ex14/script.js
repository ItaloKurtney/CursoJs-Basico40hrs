
function carregar(){
var msg =  window.document.getElementById('msg')
var img =  window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){
    //Bom dia 
    img.src = 'imgs/manha.jpg'//puxa a imagem de manha
    document.body.style.background = '#f9d487'
}else if (hora >= 12 && hora < 18){
    //Boa tarde
    img.src = 'imgs/tarde.jpg'//puxa a imagem de tarde
    document.body.style.background = '#f49e12'
}else{
    //Boa noite
    img.src = 'imgs/noite.jpg' //puxa a imagem de noite
    document.body.style.background = '#191970'
}
}