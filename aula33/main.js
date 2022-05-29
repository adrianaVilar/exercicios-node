//Função que recebe 2 números e retorna o maior:

function getLarger(n1, n2) {
  if (n1 > n2) {
    console.log(n1);
  } else if (n2 > n1) {
    console.log(n2);
  } else if (n1 === n2) {
    console.log("Os números são iguais.");
  } else {
    console.log("Digite um número válido");
  }
}

getLarger(3, "asd");
