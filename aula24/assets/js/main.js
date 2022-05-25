const resultado = document.querySelector(".resultado");
const data = new Date();
const semana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const nomeDoMes = [
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

const diaDoMes = data.getDate();
const diaDaSemana = data.getDay();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minuto = data.getMinutes();

function formataDia(diaDaSemana) {
  return semana[diaDaSemana];
}

function formataMes(mes) {
  return nomeDoMes[mes];
}

const diaFormatado = formataDia(diaDaSemana);
const mesFormatado = formataMes(mes);

resultado.innerHTML = `<p>${diaFormatado}, ${diaDoMes} de ${mesFormatado} de ${ano}. ${hora}:${minuto}</p>`;
