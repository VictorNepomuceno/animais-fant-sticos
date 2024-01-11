import outsideClick from "./outsideClick.js";

export default function initMobileMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const menu = document.querySelector(".menu ul");
  const events = ["click", "touchstart"];

  function openMenu() {
    menu.classList.toggle("ativo");
    toggleMenu.classList.toggle("ativo");
    outsideClick(menu, events, () => {
      menu.classList.remove("ativo");
      toggleMenu.classList.remove("ativo");
      console.log("teste");
    });
  }

  toggleMenu.addEventListener("click", openMenu);
}
