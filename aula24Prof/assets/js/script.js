Date.prototype.next = function () {
  this.setDate(this.getDate() + 1);
};
Date.prototype.preview = function () {
  this.setDate(this.getDate() - 1);
};

const h1 = document.querySelector(".container h1");
const data = new Date();
let diaDaSemana = data.getDay();
let mes = data.getMonth();

const diaSemanaTexto = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const mesTexto = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

function getDia(diaDaSemana) {
  return diaSemanaTexto[diaDaSemana];
}

function getMes(mes) {
  return mesTexto[mes];
}

apresenta(data);

function proximo() {
  data.next();
  apresenta(data);
}

function anterior() {
  data.preview();
  apresenta(data);
}

function apresenta(data) {
  let diaFormatado = getDia(data.getDay());
  let mesFormatado = getMes(data.getMonth());

  h1.innerHTML = `${diaFormatado}, ${data.getDate()} de ${mesFormatado} de ${data.getFullYear()}. ${zeroAEsquerda(
    data.getHours()
  )}:${zeroAEsquerda(data.getMinutes())}`;
}

function zeroAEsquerda(num) {
  return num < 10 ? `0${num}` : num;
}
