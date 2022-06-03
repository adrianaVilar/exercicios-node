const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Somar os valores
const total = numeros.reduce(function (acumulador, valor) {
  acumulador += valor;
  return acumulador;
}, 0);
console.log(total);

//Exibir os pares (fazer com FILTER)
const pares = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(pares);

//Exibir o dobro (fazer com MAP)
const dobro = numeros.reduce(function (acumulador, valor) {
  acumulador.push(valor * 2);
  return acumulador;
}, []);
console.log(dobro);
console.log(numeros);

const pessoas = [
  { nome: "Stefanie", idade: 27 },
  { nome: "Amélia", idade: 36 },
  { nome: "Cristina", idade: 35 },
  { nome: "Meredith", idade: 35 },
  { nome: "Meggye", idade: 30 },
  { nome: "Karev", idade: 37 },
];

//Verificar qual a pessoa mais velha
const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha);
