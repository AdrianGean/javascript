// // 1 - métodos
// const animal = {
//     nome: "Bob",
//     latir: function () {
//       console.log("Au au"); // latir junto com a function que seria nosso método, método é parecido com função, é uma função em um objeto.
//     },
//   };
  

// console.log(animal.nome)
// animal.latir();

// 2 - aprofundando em métodos
// const pessoa = {
//     nome: "Adrian",
  
//     getNome: function () {
//       return this.nome;
//     },
  
//     setNome: function (novoNome) {
//       this.nome = novoNome;
//     },
//   };
  
//   console.log(pessoa.nome);
  
//   console.log(pessoa.getNome());
  
//   pessoa.setNome("Adrian Gean");
  
//   console.log(pessoa.getNome());

// 3 - prototype
// const text = "asd";

// console.log(Object.getPrototypeOf(text));

// const bool = true;

// console.log(Object.getPrototypeOf(bool));

// const arr = [];

// console.log(arr.length);

// console.log(Object.getPrototypeOf(arr) === Array.prototype);

// 4 - mais sobre prototype
// const myObject = {
//     a: "b",
//   };
  
//   console.log(Object.getPrototypeOf(myObject));
  
//   console.log(Object.getPrototypeOf(myObject) === Object.prototype);
  
//   const mySecondObject = Object.create(myObject);
  
//   console.log(mySecondObject);
  
//   console.log(Object.getPrototypeOf(mySecondObject) === myObject);

  // 5 - classes básicas
// const cachorro = {
//     raca: null,
//     patas:4 //essa é a classe, com base nela criamos outros objetos tendo essa classe/objeto como um prototype para os objetos que serão criados posteriormente, podemos modificar a raca do cachorro pois na classe o valor da raca está como null, a quantidades e patas também pode ser modificada, porém como é mais comum ter cachorros com 4 patas já colocamos o valor na classe.
//   };
  
//   const pastorAlemao = Object.create(cachorro); // aq cria um objeto novo chamado de pastorAlemao usando a classe cachorro como referência/prototype, todas as propriedades/ métodos da classe cachorro serão herdados por esse novo objeto pastorAlemao
  
//   pastorAlemao.raca = "Pastor Alemão";

//   console.log(pastorAlemao)
//   console.log(pastorAlemao.patas)
  
//   const bulldog = Object.create(cachorro);
  
//   bulldog.raca = "Bulldog";

//   console.log(bulldog)

// 6 - funcoes como classes -- construtora
// function criarCachorro(nome, raca) {
//   const cachorro = Object.create({});
//   cachorro.raca = raca;
//   cachorro.nome = nome;
//   return cachorro;
// }

// const bob = criarCachorro("Bob", "Vira lata");

// console.log(bob);

// const jack = criarCachorro("Jack", "Poodle");

// console.log(jack);

// console.log(Object.getPrototypeOf(jack));

// 7 - funcoes construtoras
function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);

// 8 - métodos na função construtora
Cachorro.prototype.uivar = function () {
  console.log("Auuu");
};

husky.uivar();

// 9 - classes es6
class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);

console.log(Object.getPrototypeOf(jeff));
