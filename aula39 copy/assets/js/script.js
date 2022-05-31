const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer;

function criaHora(segundos) {
  let hora = Math.trunc(segundos / 3600);
  let minuto = Math.trunc(segundos / 60);
  let segundo = Math.trunc(segundos % 60);

  function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
  }

  return `<p>${zeroAEsquerda(hora)}:${zeroAEsquerda(minuto)}:${zeroAEsquerda(
    segundo
  )}</p>`;
}

iniciar.addEventListener("click", function (event) {
  event.preventDefault();
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHora(segundos);
  }, 1000);
  relogio.style.color = "#000000";
});

pausar.addEventListener("click", function (event) {
  event.preventDefault;
  clearInterval(timer);
  relogio.style.color = "#FF0000";
});

zerar.addEventListener("click", function () {
  // clearInterval(timer);
  segundos = 0;
  relogio.innerHTML = criaHora(0);
  relogio.style.color = "#000000";
});
