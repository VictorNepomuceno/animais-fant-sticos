export default function initToolTip() {
  const toolTip = document.querySelectorAll("[data-tooltip]");

  toolTip.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver() {
    const toolTipBoxEvent = criarToolTipBox(this);

    onMouseLeave.toolTipBoxEvent = toolTipBoxEvent;
    onMouseMove.toolTipBoxEvent = toolTipBoxEvent;

    this.addEventListener("mouseleave", onMouseLeave);
    this.addEventListener("mousemove", onMouseMove);
  }

  const onMouseLeave = {
    handleEvent() {
      this.toolTipBoxEvent.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.toolTipBoxEvent.style.top = event.pageY + 20 + "px";
      this.toolTipBoxEvent.style.left = event.pageX + 20 + "px";
    },
  };

  function criarToolTipBox(element) {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    toolTipBox.innerText = text;
    toolTipBox.classList.add("tooltip");
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }
}
