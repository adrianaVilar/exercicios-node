const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "section", texto: "Frase 3" },
  { tag: "footer", texto: "Frase 4" },
];

const elemento = ([p, div, footer, section] = elementos);

// console.log(elemento);
// console.log(elemento[0]);
// console.log(elemento[0].tag);

function criaParagrafo() {
  const paragrafo = document.createElement("p");
  return paragrafo;
}

function setParagrafo() {
  const container = document.querySelector(".container");

  const paragrafo = criaParagrafo();

  paragrafo.classList.add("frases");

  function setElemento() {
    for (let i = 0; i < elemento.length; i++) {
      paragrafo.innerHTML += `<${elemento[i].tag}> ${elemento[i].texto} <br />`;
    }
  }

  setElemento();
  container.appendChild(paragrafo);
}

setParagrafo();
