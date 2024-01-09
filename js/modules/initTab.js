export default function initTab() {
  const active = "ativo";
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
// initTab();
