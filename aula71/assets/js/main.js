const form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let cpf = e.target.querySelector("#input-cpf");

  //Pegar 9 primeiros dígitos
  let cpfLimpo = cpf.value.replace(/\D+/g, "");
  cpfArray = Array.from(cpfLimpo);
  const newCpf = [...cpfArray].map((valor) => Number(valor));

  newCpf.splice(9, 2);

  //Multiplicar por 10, 9...
  const cpfMultiplicado1 = fazMultiplicacao(newCpf);
  let cpfMultiplicado = cpfMultiplicado1;

  //Somar tudo
  const soma1 = fazSoma(cpfMultiplicado);
  let somatorio = soma1;

  //11 - (soma % 11) = primeiro dígito
  //Se o resultado for > 9, o dígito é 0.
  const calculaDigito1 = criaDigito(somatorio);

  //Pegar os 10 primeiros dígitos
  newCpf.push(calculaDigito1);

  //Multiplicar por 11, 10...
  const cpfMultiplicado2 = fazMultiplicacao(newCpf);
  cpfMultiplicado = cpfMultiplicado2;

  //Somar
  const soma2 = fazSoma(cpfMultiplicado);
  somatorio = soma2;

  //11 - (soma % 11) = dígito.
  //Se o digito for > 9, considera 0
  const calculaDigito2 = criaDigito(somatorio);

  //Concatenar os 9 primeiros dígitos com os gerados
  newCpf.push(calculaDigito2);

  //Comparar o novo com o digitado
  let stringCpf = newCpf.join("");

  if (stringCpf === cpfLimpo) {
    setResultado("O CPF é válido", true);
  } else {
    setResultado("O CPF não é válido", false);
  }
});

function fazMultiplicacao(newCpf) {
  let i = newCpf.length + 1;
  return newCpf.map((valor) => valor * i--);
}

function fazSoma(cpfMultiplicado) {
  return cpfMultiplicado.reduce((ac, valor) => (ac += valor));
}

function criaDigito(somatorio) {
  let digito = 11 - (somatorio % 11);
  if (digito > 9) digito = 0;
  return digito;
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
