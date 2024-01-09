// // Quando o usuário clicar nos links internos do site,
// // adicione a classe ativo ao item clicado e remova dos
// // demais itens caso eles possuam a mesma. Previna
// // o comportamento padrão desses links

// const linksInternos = document.querySelectorAll("a[href^='#']");

// linksInternos.forEach((link) => {
//   link.addEventListener("click", (event) => {
//     event.preventDefault();
//     linksInternos.forEach((link) => {
//       link.classList.remove("ativo");
//     });
//     event.currentTarget.classList.add("ativo");
//   });
// });

// // Selecione todos os elementos do site começando a partir do body,
// // ao clique mostre exatamente quais elementos estão sendo clicados

// const todosElementos = document.querySelectorAll("body *");

// function handleClick(event) {
//   console.log(event.currentTarget); //.remove()
// }

// todosElementos.forEach((elements) => {
//   elements.addEventListener("click", handleClick);
// });

// // Utilizando o código anterior, ao invés de mostrar no console,
// // remova o elemento que está sendo clicado, o método remove() remove um elemento

// //.remove() ^ ^

// // Se o usuário clicar na tecla (t), aumente todo o texto do site.

// document.addEventListener("keydown", (event) => {
//   if (event.key === "t") {
//     document.documentElement.classList.toggle("textomaior");
//   }
// });

// Duplique o menu e adicione ele em copy

// const menu = document.querySelector(".menu");

// const menuClone = menu.cloneNode(true);

// const copy = document.querySelector(".footer");

// copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq

// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais

// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: "Nome pessoa",
//   idade: 0,
//   andar() {
//     console.log(this.nome + " andou");
//   },
// };

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(nome + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa("João", 20);
const maria = new Pessoa("João", 25);
const bruno = new Pessoa("João", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementsList = document.querySelectorAll(seletor);
  this.elements = elementsList;
  this.addClasse = function (classe) {
    elementsList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClasse = function (classe) {
    elementsList.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}

const h1 = new Dom("h1");
h1.addClasse("ativo");

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;

  Pessoas.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
  };
}

const victor = new Pessoas("victor", "nepomuceno", 22);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

// Object.getOwnPropertyNames(Nodelist.prototype);
// Object.getOwnPropertyNames(HTMLAllCollection.prototype);
// Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; // HTMLLIElement
li.click; // function
li.innerText; // string
li.value; // number
li.hidden; // boolean
li.offsetLeft; // number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // string .name sempre retorna uma string

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiraVar = comidas.shift();
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort();
estudantes.reverse();
console.log(estudantes);
console.log(estudantes.includes("Joana"));
console.log(estudantes.includes("Juliana"));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split("section").join("ul").split("div").join("li");
console.log(html);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carrosCopy = carros.slice();
carros.pop();
console.log(carros);
console.log(carrosCopy);

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll("section");
const arrayCurso = Array.from(cursos);

// const objetosCurso = arrayCurso.map((curso) => {
//   const cursoTitle = curso.querySelector("h2").innerText;

//   return {
//     titulo: cursoTitle,
//   };
// });

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numberFilter = numeros.filter((n) => n > 100);

console.log(numberFilter);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const instrumentosSome = instrumentos.some((i) => i === "Baixo");

console.log(instrumentosSome);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const totalCompras = compras.reduce((acc, item) => {
  const precoLimpo = +item.preco.replace("R$", "").replace(",", ".");
  return acc + precoLimpo;
}, 0);

console.log(totalCompras);

// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.
