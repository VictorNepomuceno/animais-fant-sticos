export default function initDropDown() {
  const dropMenu = document.querySelector("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, () => {
      this.classList.remove("ativo");
    });
  }

  ["click", "touchstart"].forEach((userEvent) => {
    dropMenu.addEventListener(userEvent, handleClick);
  });

  function outsideClick(element, callback) {
    const html = document.documentElement;
    html.addEventListener("click", handleOutsideClick);
    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        callback();
      }
    }
  }
}
