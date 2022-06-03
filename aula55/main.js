const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor, indice, array) {
  return valor > 10;
}

const numerosFiltrados1 = numeros.filter(callbackFilter);
console.log(numerosFiltrados1);

callback2 = (valor) => valor > 10;

const numerosFiltrados2 = numeros.filter(callback2);
console.log(numerosFiltrados2);
