// Exercícios de fundamentos
// Exercício 1: Olá, Mundo!
// Crie um script que imprima "Olá, Mundo" no console

console.log('Olá, Mundo!')

// Exercício 2: Conversão de tipos 
// Dado o valor de uma string '1234', converta-o em um número e exiba o tipo da variável no console.

const valorString = '1234'
const valorNumber = Number(valorString)
console.log(typeof valorNumber)

// Exercício 3: Manipulação de strings
// Dado uma string "JavaScript é incrivel", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase

const minhaString = "JavaScript é incrivel"
const numeroDeCaracteres = minhaString.length
const numeroDePalavras = minhaString.split(' ').length // temos que colocar o espaço dentro do split para ele separar tendo como referência os espaços.

console.log(`o número de caracteres é: ${numeroDeCaracteres}`)
console.log(`o número de palavras é: ${numeroDePalavras}`)

// Exercício 4: Loops e Arrays
// Crie um array com cinco nomes. Use um loop para imprimir cada nome no console.

const nome = ['adrian', 'roberto', 'irineu', 'zézin', 'roberta']
for (let c=0; c<nome.length; c++) {
    console.log (`o meliante da posição ${c} é ${nome[c]}`)
}

// Exercício 5: Funções, Strings e Math
// Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30"). A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM"). Use o objeto Math para auxiliar nesta conversão. Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.

function converterHorario (horario24) { 
    // 14:20 => hora = 14, minuto = 20 => split (":") => [0] = hora, [1] = minuto
    //const hora = horario24.split(":") [0]
    //const minuto = horario24.split(":") [1]

    const [hora, minuto] = horario24.split(":");

    // 15 / 12 = 3, 23 / 12 = 11
    // Falsy 12 % 12 = 0 => 12, vai cair no 12 pq vai ficar sem valor nenhum, logo se tornará falsy
    const hora12 = hora % 12 || 12

    let periodo = "AM"
    if (hora > 12) {
        periodo = "PM"
    }


    console.log(`${hora12}:${minuto} ${periodo}`)

}

converterHorario("15:15")
converterHorario("09:46")
converterHorario("22:15")