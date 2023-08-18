//Fundamentos
//var nomevar = 'valor'
// igual (=) se lê recebe, pois ele atribui um valor para algo

var minhaVariavel = 'Hello World';

console.log(minhaVariavel);

// para comentarmos no nosso código usamos o // 

/*
Serve 
para 
comentar 
em multi linhas(mais de uma)
*/

// variáveis e tipos de dados(number,string, boolean)
var meuNumero = 10; //number


console.log(meuNumero);

console.log(meuNumero + 5);

console.log("10" + 5); // 10 é string pq está entre parênteses

console.log(typeof meuNumero) // serve para ver o tipo de dado, no caso é number

var booleano = true //é um valor booleano, pode ser true ou false

console.log(typeof booleano)//tipo de dado, é um boolean

var meuObjeto = {} // para declarar objetos usamos {}
var meuArray = [] // para declarar vetores usamos []
var meuNull = null //inicia variáveis sem valor que vão ser alterados ao longo do programa
var meuUndefined = undefined // é quando uma variável não tem valor, lembre-se declarar null é dar o valor nulo para a variável, não significa que ela não tenha valor, ela tem valor e ele é nulo

console.log(typeof meuObjeto)
console.log(typeof meuArray)
console.log(typeof meuNull)
console.log(typeof meuUndefined)


//let e const
//novas formas de declarar variáveis

let x = 10 // na let podemos alterar o valor ao longo do programa 

const y = 5 // na const o valor não muda ao longo do programa, é constante

// a regra é tentar usar o const o máximo de vezes possíveis, isso garante uma confiabilidade maior no nosso código

console.log (typeof x)
console.log (x, y)

//Operadores aritméticos
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)

//Operadores de comparação
console.log (x == y)// == é um operador de comparação(igualdade), dois iguais é igualdade, um igual (=) é um operador de atribuição
console.log (x != y)//compara se são diferentes

console.log ('5' == 5)
console.log ('5' === 5)// esse operador leva em consideração o tipo de dado(number,string,boolean) e o valor, é chamado de identidade
console.log ('5' !== 5)// compara se o tipo e o valor são diferentes
//sempre utilizar === ou !==, pois passa maior confiabilidade para o código

//Operadores lógicos 
// AND &&
// OR ||

console.log(10 > 5 && 20 > 5)
console.log(10 > 5 && 20 < 5)
console.log(10 < 5 && 20 < 5)

console.log(10 > 5 || 20 > 5)
console.log(10 > 5 || 20 < 5)
console.log(10 < 5 || 20 < 5)

// Conversão de tipos
const meuNumero2 = '123'

const meuNumeroConvertido = Number(meuNumero2) //o Number pega o valor da variável e se for possível converter para um número ele vai fazer

console.log(meuNumeroConvertido)
console.log(typeof meuNumeroConvertido)


// Estrutura de condição

const idade = 16

if (idade < 13) {
    console.log('Criança')
} else if (idade < 20) {
    console.log('Adolescente')
} else {
    console.log('Adulto')
}

if (false) {
    console.log('isso executa se for true')
} else {
    console.log('isso executa se for false')
}

//Switch
const fruta = 'Maçã'

switch(fruta) {
    case 'Banana':
        console.log('Banana é a fruta')
        break
    case 'Maçã':
        console.log('Maçã é a fruta')
        break
    default:
        console.log('Fruta não encontrada')
}

// Estruturas de repetição
// 1, 2, 3, 4, 5, 6... => dependendo de uma condição


//contador, condição de limite, incremento
for (let i = 0; i < 5; i++) {
    console.log(`O valor de i é ${i}`)
}

//while
let k = 0

while (k < 5) {
    console.log(`O valor de k é ${k}`)
    k++
}

// do while

let j = 0

do {
    console.log(`O valor de j é ${j}`)
    j++
} while (j < 5)


//funções
// function nomedafunção (arg1, arg2) {corpo}
// arg são como variáveis passadas pra função que podem ser usadas dentro dela
function cumprimentar (nome) {
    console.log('Olá ' + nome)
}

// invocação = nome()
cumprimentar('Matheus')


// escopo de variáveis
let cor = 'azul'


function mostrarCor() {
    let cor = 'verde'
    console.log(cor)
}

console.log(cor)

mostrarCor()

//hoisting = içamento

testeHoisting()


function testeHoisting() {
    console.log('Deu certo')
}


// arrow function
const testeArrow = () => console.log('Isso também é uma função')


testeArrow()

//truthy e falsy
const minhaVariavel1 = '' //falsy, o JS considera falso pq não tem nenhum valor
const minhaVariavel2 = 'algum texto' //truthy, o JS considera verdadeiro pq tem valor

if (minhaVariavel1) {
    console.log("É verdadeiro")
} else {
    console.log("É falso")
}

if (minhaVariavel2) {
    console.log("É verdadeiro 2")
} else {
    console.log("É falso 2")
}

// array, listas 
const numeros = [1, 2, 3, 4, 5]

console.log(numeros)

console.log(numeros[2])

numeros.push(6)

console.log(numeros)

//prototype => OBJETO => objeto2, pega um objeto e permite derivar todas as caracteristicas dele para outro objeto.
// Array => nossos arrays, posso usar o método pop,push,log, etc pq o Array pode usar, e os nossos arrays são derivados do Array, logo podemos usar também.

numeros.pop()

console.log(numeros)


//strings
const minhaStringNova = 'Olá, Mundo!'

//concatenação = +
const minhaString3 = minhaStringNova + ' Como você está?'

console.log(minhaString3)


//interpolação
const minhaString4 = `${minhaStringNova} Como você está?`
console.log(minhaString4)

console.log(minhaString4.length) // qtd de caracteres
console.log(minhaString4[5])
console.log(minhaString4.toUpperCase())

// Data e hora
const agora = Date () //pegamos a data atual com esse objeto
console.log(agora)

const natal =  new Date(2023, 11, 25)
console.log(natal)

// Math
console.log(Math.PI) // da o valor do PI

console.log(Math.round(3.6)) //arredondar um número

console.log(Math.sqrt(16)) // raiz quadrada

console.log(Math.pow(2,3)) // potência, base 2 e expoente 3 