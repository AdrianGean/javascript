// Exercício de Manipulação de Array
// Crie uma lista de compras que é inicialmente vazia.
// Adicione 5 itens na lista usando push ().
// Agora, remova o primeiro item da lista usando shift ().
// Imprima a lista final no console

const lista = []

lista.push(0,1,2,3,4)

lista.shift()

console.log(lista)

// Exercício de de Manipulação de Array - find()
// Você tem um Array de números: [3, 7, 14, 21, 29, 36, 42]
// Use a função find() para encontrar o primeiro número que é divisível por 7 e maior que 10

const numeros = [3, 7, 14, 21, 29, 36, 42]
const numerodivmaior = numeros.find((num) => num > 10 && num % 7 === 0)

console.log(numerodivmaior)

// Exercício de Manipulação de Array - filter()
// Dado o array de números: [5, 10, 15, 20, 25, 30, 35, 40]
// Use a função filter() para criar um novo array que contenha apenas os número que são maiores que 20

const numeros2 = [5, 10, 15, 20, 25, 30, 35, 40]
const resultado2 = numeros2.filter((num) => num > 20)

console.log(resultado2)

// Exercício de Manipulação de String - split (), trim ()
// Dada a string: " Bom dia, mundo! ".
// Remova os espaços em branco no início e no final da string em seguida, divida a string em palavras.

const string1 = " Bom dia, mundo! "

const trim1 = string1.trim()

console.log(trim1)

const split1 = trim1.split(" ")

console.log(split1) 

// Exercício de Manipulação de String - startsWith(), endsWith()
// Dada a string: "O rato roeu a roupa do rei de Roma".
// Verifique se a string começa com a palavra "O" e termina com a palavra "Roma".

const frase1 = "O rato roeu a roupa do rei de Roma"

const verificar = frase1.startsWith('O')

console.log(verificar)
    
const verificar1 = frase1.endsWith('Roma')

console.log(verificar1) 