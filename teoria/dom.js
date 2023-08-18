// DOM - Document Object Model

// Selecionar elementos
const elementoPorId = document.getElementById('meuId') //metódo antigo

console.log(elementoPorId)

const elementoPorQuerry = document.querySelector('#meuId') //metódo atual

console.log(elementoPorQuerry)

const elementoPorClasse = document.getElementsByClassName('minhaClasse')

console.log(elementoPorClasse)

const classeComQuery = document.querySelector('.minhaClasse')

console.log(classeComQuery)

// Manipular conteúdo de texto
const elemento = document.querySelector('#meuId')

console.log(elemento.textContent)

setTimeout (() => {
    elemento.textContent = 'Mudei de texto'// textContent serve para mudar o texto de algum id ou class, precisamos atribuir o novo valor com o =
}, 2000)


// Trabalhando/mudando atributos

const link = document.querySelector('a')

console.log(link)

link.setAttribute('href', 'https://github.com') // o setAttribute coloca um novo valor no atributo.

console.log(link.getAttribute('href')) // o getAttribute mostra apenas o valor atual do atributo.

console.log(link.hasAttribute('target')) // hasAttribute verifica se o atributo existe, no caso do exemplo verifica se o atributo target existe, a resposta é uma booleana, no caso true porque o atributo target existe.

link.removeAttribute('target') // removeAttribute remove o atributo.

// Manipulação de classes do CSS
const elemento1 = document.querySelector('#meuId')

elemento1.classList.add('novaClasse') //adiciona uma classe nova

elemento1.classList.remove('minhaClasse') //remove uma classe

elemento1.classList.toggle('outraClasse') //o toggle pode adicionar uma classe caso não tenha

elemento1.classList.toggle('outraClasse') //o toggle pode remover uma classe caso ela já exista

// Manipular o CSS
const elemento3 = document.querySelector('#meuId')

elemento3.style.color = 'blue'

elemento3.style.backgroundColor = 'lightgreen'

elemento3.style.fontFamily = 'monospace'

// background-color => backgroundColor
// font-family => fontFamily

// Navegação entre nós 
const element4 = document.querySelector('#meuInput')

const pai = element4.parentNode // parentNode pega o elemento pai do elemento atribuido a variável element4

console.log(pai)

// Obter o primeiro filho
const primeiroFilho = pai.firstChild // pega o primeiro filho do elemento pai

console.log(primeiroFilho)

const ultimoFilho = pai.lastChild // pega o último filho do elemento pai

console.log(ultimoFilho)

// Manipulação de estrutura do DOM
const novoElemento = document.createElement('div') // createElement cria elementos através do JS

console.log(novoElemento)

novoElemento.textContent = 'Minha div de JS' // Usamos o textContent para adicionar um text no elemento que criamos

console.log(novoElemento)

document.body.appendChild(novoElemento) // appendChild adiciona o elemento que criamos no HTML

document.body.insertBefore(novoElemento, pai) // adiciona o elemento que criamos antes do elemento que escolhermos, no caso o elemento escolhido foi o pai.

document.body.removeChild(elementoPorId) // remove o elemento

// Eventos

// click
const botao = document.querySelector('button')

botao.addEventListener ('click', function () { // add.EventListener permite que haja interações de acordo com parâmetro colocado, no caso seria uma interação depois de um click
    console.log('Botão clicado!')
})

// mouse
const elemento5 = document.querySelector('#meuFormulario')

elemento5.addEventListener('mouseover', function() { // addEventListener ao passar o mouse por cima de algo
    console.log('O mouse passou aqui!')
})

// teclado
const campoInput = document.querySelector('#meuInput')

campoInput.addEventListener("keydown", function() { // addEventListener ao apertar alguma tecla do teclado
    console.log('Tecla pressionada!')
})

// formulário
const form = document.querySelector('form')

form.addEventListener('submit', function (event) { // addEventListener ao enviar um formulário, o argumento event e o método event.preventDefault permite que o comportamento padrão de um formulário não aconteça, ou seja, ele interrompe o envio do formulário para algum lugar, dessa forma a página web não recarrega e nós podemos ver a mensagem no console dessa forma, nós paramos o envio do formulário, é assim que fazemos validações em JS
    event.preventDefault()
    
    console.log('O formulário foi enviado')
})


// propagação de eventos
document.querySelector('#elementoPai').addEventListener('click', function() { // Podemos adicionar um evento direto ao elemento
    console.log('Clique capturado no pai') // eventos no elemento pai propagam no elemento filho, ao clicar no pai o evento é disparado, ao clicar no filho o evento também é disparado
})

document.querySelector('#elementoFilho').addEventListener('click', function(event) { // ao cliclar no elemento filho, tanto o evento do elemento pai, quanto do elemento filho serão disparados, aqui é 'feature', no projeto é bug. Podemos parar a propagação usando o argumento event com o método event.stopPropagation()
    //event.stopPropagation()
    console.log('Elemento Filho')

})


document.querySelector('#meuLink').addEventListener('click', function(event) {
     event.preventDefault() // tira o comportamento padrão do elemento
     console.log('clicou no link') // ao clicar no link a página não será redirecionada para o link do href, pois tiramos o comportamento padrão do elemento com o event.preventDefault()
})


// Delegação de eventos
document.querySelector('#elementoPai').addEventListener('click', function(event) {
    if(event.target.matches('.classeDosFilhos')) { // o event.target.matches() delega o evento para o elemento que estiver dentro dos parênteses, ou seja, ao clicarmos no elemento pai nenhum evento acontecerá, agora se clicarmos no elemento filho o evento disparará pois o evento foi delegado para ele através do elemento pai.
        console.log('Evento delegado para o filho')
    }
})


