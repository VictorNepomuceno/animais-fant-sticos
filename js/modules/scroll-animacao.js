export default function initScroll() {
  const active = "ativo";
  const sections = document.querySelectorAll(".js-scroll");
  const halfWidowScreen = window.innerHeight * 0.6;

  function animationScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isVisible = sectionTop - halfWidowScreen < 0;
      if (isVisible) {
        section.classList.add(active);
      } else if (section.classList.contains(active)) {
        section.classList.remove(active);
      }
    });
  }
  animationScroll();
  window.addEventListener("scroll", animationScroll);
}
