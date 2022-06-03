const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Separando a função e com verificação
function callbackFilter(valor) {
  return valor > 10;
}

const numerosFiltrados1 = numeros.filter(callbackFilter);
console.log(numerosFiltrados1);

//Com arrow function
callback2 = (valor) => valor > 10;

const numerosFiltrados2 = numeros.filter(callback2);
console.log(numerosFiltrados2);

//Com função anônima
const numerosFiltrados3 = numeros.filter(function (valor) {
  return valor > 10;
});

console.log(numerosFiltrados3);

//Com arrow function2
const numerosFiltrados4 = numeros.filter((valor) => valor > 10);

console.log(numerosFiltrados4);
