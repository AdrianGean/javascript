// ES6 + => versao do javascript
// let e const
let n = 10
n = 20

const x = 15

function testeVar () {
    var x = 1
    if (true) {
        var x = 2
        console.log(x)
    }

    console.log(x)
}

function testeLet () {
    let x = 1
    if (true) {
        let x = 2
        console.log(x)
    }

    console.log(x)
}

testeVar()
testeLet()

// arrow function
const soma = (a, b) => a + b
console.log(soma(5,3))

const quadrado = (numero) => numero * numero
console.log(quadrado(4))

const cumprimento = (nome) => {
    const mensagem = `Olá ${nome}`
    return mensagem
}

console.log(cumprimento('Adrian'))

// Template literals
const nome = 'Maria'
const idade =  22

console.log(`Meu nome é ${nome} e tenho ${idade} anos`)

// Destructuring -> desestruturação 
const pessoa ={nome: 'Jõao', idade: 40, profissao: "Programador"} // declaramos um objeto

const {nome: nome2, idade: idade2, profissao} = pessoa // transformamos os valores do objeto em variáveis

console.log(nome2, profissao)

const numeros= [1, 2, 3, 4] 

const [primeiro, segundo, terceiro] = numeros // podemos usar com arrays tbm, o quarto ficou de fora

console.log(primeiro,segundo,terceiro) 


// spread operator => espalhamento 
const array1 = [1, 2, 3]
const array2 = [...array1, 4, 5, 6] // usamos os três pontos para fazer essa "junção"
console.log(array2)

const soma2 = (...args) => args.reduce((total,numero) => total + numero,0)
console.log(soma2(1,2,3,4,5,6,7))

// default parameters
function saudacao (nome = 'visitante') {
    console.log(`Olá ${nome}!`)
}

saudacao()
saudacao('adrian')


// object literals enhancements
// {nome:"joao"}

const nomeNovo = 'Felipe'
const idadeNova = 24

const pessoaNova = {nome: nomeNovo, idade: idadeNova} // é o 'inverso' do destructuring
console.log(pessoaNova)

const saudacaoObject = {
    dizerOi() {
        console.log('oi')
    }
}

saudacaoObject.dizerOi()


// classes e heranças
class Pessoa {
    constructor(nome,idade) {
        this.nome = nome
        this.idade = idade
    }

    falar() {
        console.log(`olá pessoal, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

const joao = new Pessoa('João', 34)

console.log(joao)
joao.falar()

const pedro = new Pessoa('Pedro', 18)

console.log(pedro)
pedro.falar()

class Funcionario extends Pessoa { // o extends serve para 'importar' as caracteristicas da classe Pessoa, a classe Funcionario herda as propriedades da classe Pessoa
    constructor(nome,idade,salario){
        super(nome, idade) // usamos o super para 'importar' da classe Pessoa
        this.salario = salario
    }
    
    falarFuncionario() {
        super.falar() // usamos o super para 'importar' o falar da classe Pessoa
        console.log(`estou aprendendo e ganho ${this.salario}`)
    }
}

const mario = new Funcionario('mario', 50, 190000)
console.log(mario)
mario.falar()
mario.falarFuncionario()