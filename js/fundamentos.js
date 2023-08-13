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



