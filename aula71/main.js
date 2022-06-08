const cpf = "03300240005";

//Pegar 9 primeiros dígitos
let cpfLimpo = cpf.replace(/\D+/g, "");
cpfArray = Array.from(cpfLimpo);
const newCpf = [...cpfArray].map((valor) => Number(valor));

const digito2 = Number(newCpf.pop());
const digito1 = Number(newCpf.pop());

//Multiplicar por 10, 9...
const cpfMultiplicado1 = multiplica(newCpf);
let cpfMultiplicado = cpfMultiplicado1;

//Somar tudo
const soma1 = soma(cpfMultiplicado);
let somatorio = soma1;

//11 - (soma % 11) = primeiro dígito
//Se o resultado for > 9, o dígito é 0.
const calculaDigito1 = digito(somatorio);

//Pegar os 10 primeiros dígitos
newCpf.push(calculaDigito1);

//Multiplicar por 11, 10...
const cpfMultiplicado2 = multiplica(newCpf);
cpfMultiplicado = cpfMultiplicado2;

//Somar
const soma2 = soma(cpfMultiplicado);
somatorio = soma2;

//11 - (soma % 11) = dígito.
//Se o digito for > 9, considera 0
const calculaDigito2 = digito(somatorio);

//Concatenar os 9 primeiros dígitos com os gerados
newCpf.push(calculaDigito2);

//Comparar o novo com o digitado
let stringCpf = newCpf.join("");

if (stringCpf === cpfLimpo) {
  console.log("CPF válido");
} else {
  console.log("O CPF não é válido");
}

function multiplica(newCpf) {
  let i = newCpf.length + 1;
  return newCpf.map((valor) => valor * i--);
}

function soma(cpfMultiplicado) {
  return cpfMultiplicado.reduce((ac, valor) => (ac += valor));
}

function digito(somatorio) {
  let digito = 11 - (somatorio % 11);
  if (digito > 9) digito = 0;
  return digito;
}
