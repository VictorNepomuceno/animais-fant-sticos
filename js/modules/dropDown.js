import outsideClick from "./outsideClick.js";
export default function initDropDown() {
  const dropMenu = document.querySelector("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("ativo");
    });
  }

  ["click", "touchstart"].forEach((userEvent) => {
    dropMenu.addEventListener(userEvent, handleClick);
  });
}
