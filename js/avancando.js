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