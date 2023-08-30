var agora = new Date()
var hora = agora.getHours()
var text = document.getElementById("txt")
var imagem = document.getElementById("imgday")
var body = document.body
body.style.background= 'antiquewhite'

if (hora < 12){
    text.innerHTML = `Agora são ${hora} horas e está de dia!`
    imagem.src = 'imagens/day.jpg'
    body.style.background= 'rgb(105, 177, 245)'
}

else if (hora >= 12 && hora <= 19){
    text.innerHTML = `Agora são ${hora} horas e está de tarde!`
    imagem.src = 'imagens/656x0.webp'
    body.style.background= 'rgb(234, 209, 126)'
}

else{
    text.innerHTML = `Agora são ${hora} horas e está de noite!`
    imagem.src = 'imagens/night.jpg'
    body.style.background= 'rgb(74, 74, 74)'
}


