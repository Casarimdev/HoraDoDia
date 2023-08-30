var agora = new Date()
var hora = agora.getHours()
var text = document.getElementById("txt")
var imagem = document.getElementById("imgday")

if (hora < 12){
    text.innerHTML = `Agora são ${hora} horas e está de dia!`
    imagem.src = 'imagens/day.jpg'
}

else if (hora >= 12 && hora <= 19){
    text.innerHTML = `Agora são ${hora} horas e está de tarde!`
    imagem.src = 'imagens/656x0.webp'
}

else{
    text.innerHTML = `Agora são ${hora} horas e está de noite!`
    imagem.src = 'imagens/night.jpg'
}


