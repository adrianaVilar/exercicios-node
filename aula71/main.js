const cpf = "030.286.060-62";

//Pegar 9 primeiros dígitos
let cpfLimpo = cpf.replace(/\D+/g, "");
cpfArray = Array.from(cpfLimpo);
const newCpf = [...cpfArray].map((valor) => Number(valor));

const digito2 = Number(newCpf.pop());
const digito1 = Number(newCpf.pop());

// console.log(cpfLimpo);
// console.log(newCpf);
// console.log(digito2);
// console.log(digito1);

//Multiplicar por 10, 9...

let i = 10;
const cpfMultiplicado1 = newCpf.map((valor) => valor * i--);
console.log(cpfMultiplicado1);

//Somar tudo

const soma1 = cpfMultiplicado1.reduce((ac, valor) => (ac += valor));
console.log(soma1);

//11 - (soma % 11) = primeiro dígito
//Se o resultado for > 9, o dígito é 0.
let calculaDigito1 = 11 - (soma1 % 11);
if (calculaDigito1 > 9) calculaDigito1 = 0;
console.log(calculaDigito1);

//Pegar os 10 primeiros dígitos
newCpf.push(calculaDigito1);
console.log(newCpf);

//Multiplicar por 11, 10...
i = 11;
const cpfMultiplicado2 = newCpf.map((valor) => valor * i--);
console.log(cpfMultiplicado2);

//Somar
const soma2 = cpfMultiplicado2.reduce((ac, valor) => (ac += valor));

//11 - (soma % 11) = dígito.
//Se o digito for > 9, considera 0
let calculaDigito2 = 11 - (soma2 % 11);
if (calculaDigito2 > 9) calculaDigito2 = 0;

//Concatenar os 9 primeiros dígitos com os gerados
newCpf.push(calculaDigito2);

//Comparar o novo com o digitado
let stringCpf = newCpf.join("");

console.log(stringCpf);
console.log(cpfLimpo);
if (stringCpf === cpfLimpo) {
  console.log("ok");
}
