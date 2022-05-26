const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNum, segundoNum, ...outrosNumeros] = num;
console.log(primeiroNum, segundoNum);
console.log(outrosNumeros);

const num2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const [lista1, lista2, lista3] = num2;
console.log(lista2[0]);
