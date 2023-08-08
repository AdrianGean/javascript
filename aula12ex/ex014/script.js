function carregar () {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#F4D2B7'
} else if (hora >= 12 && hora <= 18) {
    img.src = 'imagens/tarde.png'
    document.body.style.background ='#8A340E'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#231F20'
    }
}
