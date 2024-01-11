export default function initAnimaNumeros() {}

function animaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");

  numeros.forEach((item) => {
    const total = item.innerText;
    const incremento = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      item.innerText = start;
      start = start + incremento;
      if (start > total) {
        item.innerText = total;
        clearInterval(timer);
      }
    }, 20 * Math.random());
  });
}

function handleObserver(mutation) {
  if (mutation[0].target.classList.contains("ativo")) {
    animaNumeros();
    observer.disconnect();
  }
}

const observeTarget = document.querySelector(".numeros");
const observer = new MutationObserver(handleObserver);

observer.observe(observeTarget, { attributes: true });
