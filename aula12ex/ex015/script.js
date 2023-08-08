function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res') 
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('nao fode porra, escreve os bagui certo')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','babyman.png')
            } else if ( idade <21){
                //jovem
                img.setAttribute('src', 'teenman.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultman.png')
            } else {
              //idoso
              img.setAttribute('src','oldman.png') 
            }
        } else if (fsex [1].checked) {
            genero ='Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'babygirl.png')
            } else if ( idade <21){
                //jovem
                img.setAttribute('src', 'teengirl.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultwoman.png')
            } else {
              //idoso 
              img.setAttribute('src', 'oldwoman.png') 
            }
        }
        res.style.textAlign='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}