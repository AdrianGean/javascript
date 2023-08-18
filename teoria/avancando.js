// Avançando em JS

// Manipulação de arrays
const frutas = ["Maçã", "Laranja"]

frutas.unshift("Acerola")

console.log(frutas)

frutas.shift()

console.log(frutas)

// map, filter, reduce -> arrow function
const numeros = [1, 2, 3, 4, 5, 6]

// find só retorna o primeiro elemento do critério 
const numeroPar = numeros.find((num) => num % 2 === 0)

console.log(numeroPar)

// filter retorna todos os elementos que batem com o critério
const numerosPares = numeros.filter((num) => num % 2 === 0)

console.log(numerosPares)

// Manipulação de Strings
const frase = '  Olá, mundo!  '

const palavras = frase.trim().split(' ') // o método trim () tira os espaços "desnecessários" colocados pelos usuário

console.log(frase)
console.log(palavras)

const frase2 = "JavaScript é incrível!"

console.log(frase2.startsWith("Java")) // startsWith verifica se a frase inicia com a palavra Java, e retorna um booleano, se fosse java retornaria false
console.log(frase2.endsWith('!')) // endsWith verifica se a frase termina com !


// Exceções e tratamento de erros
const idade = 15

/*if (idade < 18) {
    throw new Error ("Você deve ter pelos menos 18 anos de idade") //Encerra o a continuação do programa
} */

try {
    const idade = 15
    if (idade < 18) {
        throw new Error ("Você deve ter pelos menos 18 anos de idade") // Não encerra a continuação do programa
    } 
} catch (error) {
    console.log(error.message)
}

console.log('Continuando o programa')


// Callback => função --- é uma função que vai ser executada em outra função
function cumprimentar (nome, callback) {
    console.log('Olá ' + nome)
    callback() // aq deixamos claro que o outro parâmetro é uma função
}

function mostrarSaudação() {
    console.log('Como você está?')
}

cumprimentar ("Matheus", mostrarSaudação)

cumprimentar ('Maria', function () {
    console.log("Tá tudo bem?")
})


// settimeout => dps de um tempo executa algo, uma vez, recebe uma função de callback como argumento(é o algo que ela vai executar)
function mostrarMensagem () {
    console.log("Essa mensagem será exibida após 3 segundos.")
}

//1000ms = 1s
//setTimeout (mostrarMensagem, 3000)

//setTimeout (function () {
//    console.log('Olá my friend')
//}, 2000)


// Promises -- promete que o código vai executar após alguma coisa
const promessa = new Promise ((resolve, reject) => {
    const condicao = true

    if (condicao) {
        resolve("A condição é verdadeira")
    } else {
        reject("A condição é falsa")
    }
}) 

promessa.then((mensagem) => {
    console.log(mensagem)
}).catch((erro) => {
    console.log(erro)
})

// Há muitas bibliotecas que são feitas "promise based"

const promise1 = Promise.resolve(3)
const promise2 = new Promise ((resolve,reject) => {
    setTimeout(resolve, 2500, "testando")
})

Promise.all([promise1, promise2]).then((valores) => console.log(valores)) // o .all faz com que as duas promessas apareçam juntas, ou seja, depois dos 2500 milissegundos, mesmo a promise1 sendo instantânea ela tem que esperar os 2500 milissegundos por causa do .all


// Async Await
async function obterValor() {
    const promessa = new Promise ((resolve, reject) => {
    setTimeout(() => resolve('Valor obtido'), 2000)
    })
    
    const valor = await promessa 
    console.log(valor)
}

obterValor()

async function obterValorComErro() {
    try {//usamos o try/catch para retornarmos o valor com erro
        const promessa = new Promise ((resolve, reject) => {
            setTimeout(() => reject('Valor com erro'), 2000)
            })
            
            const valor = await promessa 
            console.log(valor)
    } catch (error) {
        console.log(error)
    }
}

obterValorComErro()

// JSON (JavaScript Object Notation)
// {nome: "teste"} => {"nome": "teste"}
// Padroniza a comunicação
// front-end e back-end em uma linguagem só

const objeto = {nome: "João", idade: 30}

const jsonString = JSON.stringify(objeto) // transforma o objeto em um JSON, através do método JSON é possível transformar o objeto em um JSON, o stringify tranforma o objeto em uma string, o resultado dessa transformação é o que mandamos para o servidor

console.log(jsonString)
console.log(typeof jsonString)

const json = '{"nome": "João", "idade": 30}' //aqui é quando recebemos do servidor um JSON, e precisamos transformar em um objeto

const objeto2 = JSON.parse(json)
 console.log(objeto2)


