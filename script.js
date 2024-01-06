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

const active = "ativo";

function initTab() {
  const animaisLista = document.querySelectorAll(".animais-lista li");
  const animaisContent = document.querySelectorAll(
    ".animais-descricao section"
  );
  animaisContent[0].classList.add(active);

  function activeTab(index) {
    animaisContent.forEach((section) => {
      section.classList.remove(active);
    });
    animaisContent[index].classList.add(active);
  }

  animaisLista.forEach((li, index) => {
    li.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
initTab();

function initAccordion() {
  const accordionList = document.querySelectorAll(".faq-lista dt");

  accordionList[0].classList.add(active);
  accordionList[0].nextElementSibling.classList.add(active);

  function activeAccordion(event) {
    event.currentTarget.classList.toggle(active);
    event.currentTarget.nextElementSibling.classList.toggle(active);
  }

  accordionList.forEach((dt) => {
    dt.addEventListener("click", activeAccordion);
  });
}
initAccordion();

const sections = document.querySelectorAll(".js-scroll");
const halfWidowScreen = window.innerHeight * 0.6;

function animationScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isVisible = sectionTop - halfWidowScreen < 0;
    if (isVisible) {
      section.classList.add(active);
    } else {
      section.classList.remove(active);
    }
  });
}
animationScroll();

window.addEventListener("scroll", animationScroll);
