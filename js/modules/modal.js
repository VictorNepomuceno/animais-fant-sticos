export default function initModal() {
  const abrirModal = document.querySelector(".login");
  const closeModal = document.querySelector(".fechar");
  const janelaModal = document.querySelector(".janelaModal");

  if (abrirModal && closeModal && janelaModal) {
    function fecharModal() {
      janelaModal.classList.remove("ativo");
    }

    function openModal(e) {
      e.preventDefault();
      janelaModal.classList.add("ativo");
    }

    function clickOutside(event) {
      if (event.target === this) {
        fecharModal();
      }
    }

    abrirModal.addEventListener("click", openModal);
    closeModal.addEventListener("click", fecharModal);
    janelaModal.addEventListener("click", clickOutside);
  }
}
