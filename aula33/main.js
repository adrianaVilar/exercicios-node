//Função que recebe 2 números e retorna o maior:

function getLarger(n1, n2) {
  if (n1 > n2) return n1;
  if (n2 > n1) return n2;
  if (n1 === n2) {
    return "Os números são iguais.";
  } else {
    return "Digite um número válido";
  }
}

console.log(getLarger(3, 3));
