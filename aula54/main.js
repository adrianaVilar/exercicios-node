const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let maioresQueDez = [];

for (let numero of numeros) {
  if (numero > 10) {
    maioresQueDez += [numero + " "];
  }
}

const novoArray = maioresQueDez.split(" ");

console.log(novoArray);
