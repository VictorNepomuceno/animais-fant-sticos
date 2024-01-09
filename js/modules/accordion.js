export default function initAccordion() {
  const active = "ativo";
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
//   initAccordion();
