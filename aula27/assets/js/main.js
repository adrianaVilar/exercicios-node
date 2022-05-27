const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "section", texto: "Frase 3" },
  { tag: "footer", texto: "Frase 4" },
];

const [p, div, footer, section] = elementos;

function criaParagrafo() {
  const paragrafo = document.createElement("p");
  return paragrafo;
}

function setParagrafo() {
  const container = document.querySelector(".container");

  const paragrafo = criaParagrafo();

  paragrafo.classList.add("frases");
  paragrafo.innerHTML += `<${p.tag}> ${p.texto} <br />`;
  paragrafo.innerHTML += `<${div.tag}> ${div.texto} <br />`;
  paragrafo.innerHTML += `<${footer.tag}> ${footer.texto} <br />`;
  paragrafo.innerHTML += `<${section.tag}> ${section.texto} <br />`;
  container.appendChild(paragrafo);
}

setParagrafo();
