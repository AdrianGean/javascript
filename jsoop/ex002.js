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

// // 7 - funcoes construtoras
// function Cachorro(nome, raca) {
//   this.nome = nome;
//   this.raca = raca;
// }

// const husky = new Cachorro("Ozzy", "Husky");

// console.log(husky);

// // 8 - métodos na função construtora
// Cachorro.prototype.uivar = function () {
//   console.log("Auuu");
// };

// husky.uivar();

// // 9 - classes es6
// class CachorroClasse {
//   constructor(nome, raca) {
//     this.nome = nome;
//     this.raca = raca;
//   }
// }

// const jeff = new CachorroClasse("Jeff", "Labrador");

// console.log(jeff);

// console.log(Object.getPrototypeOf(jeff));


// // 10 - mais sobre classes
// class Caminhao {
//   constructor(eixos, cor) {
//     this.eixos = eixos;
//     this.cor = cor;
//   }

//   descreverCaminhao() {
//     console.log(
//       `Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}.`
//     );
//   }
// }

// const scania = new Caminhao(6, "Vermelha");

// scania.descreverCaminhao();

// Caminhao.motor = 4.0; // essa forma não funciona

// const c2 = new Caminhao(4, "Preta");

// // Motor é undefined
// console.log(c2.motor);

// Caminhao.prototype.motor = 4.0; // essa forma funciona, cria uma nova propriedade diretamente no prototype 

// const c3 = new Caminhao(6, "Azul");

// console.log(c3.motor);

// // 11 - override por prototype
// class Humano {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }
// }

// const matheus = new Humano("Adrian", 18);

// console.log(matheus);

// Humano.prototype.idade = "Não definida";

// console.log(matheus.idade);
// console.log(Humano.prototype.idade);


// // 12 - symbol
// class Aviao {
//   constructor(marca, turbinas) {
//     this.marca = marca;
//     this.turbinas = turbinas;
//   }
// }

// const asas = Symbol();
// const pilotos = Symbol()

// Aviao.prototype[asas] = 2;

// Aviao.prototype[pilotos] = 3

// const boeing = new Aviao("Boeing", 10);

// console.log(boeing);

// console.log(boeing[asas]);

// console.log(Aviao.prototype[asas]);

// console.log(boeing[pilotos])


// // 13 - getter e setter
// class Post {
//   constructor(titulo, descricao, tags) {
//     this.titulo = titulo;
//     this.descricao = descricao;
//     this.tags = tags;
//   }

//   get exibirTitulo() {
//     return `Você está lendo: ${this.titulo}`;
//   }

//   set adicionarTags(tags) {
//     const tagsArray = tags.split(", ");
//     this.tags = tagsArray;
//   }
// }

// const myPost = new Post("Algum post", "É um post sobre programação");

// console.log(myPost.exibirTitulo);

// myPost.adicionarTags = "programacao, javascript, js";

// console.log(myPost);


// // 14 - Herança
// class Mamifero {
//   constructor(patas) {
//     this.patas = patas;
//   }
// }

// class Lobo extends Mamifero {
//   constructor(patas, nome) {
//     super(patas, patas);
//     this.nome = nome;
//   }
// }

// const shark = new Lobo(4, "Shark");

// console.log(shark);


// // 15 - instanceof
// console.log(shark instanceof Lobo);

// console.log(Lobo instanceof Mamifero);

// console.log(new Lobo(4, "teste") instanceof Mamifero);

// console.log(new Post("a", "b") instanceof Lobo);