//Retornar a soma (reduce) do dobro (map) dos números pares (filter)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const totalDoDobroDaSomaDosPares = numeros
  .filter((obj) => obj % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => (acumulador += valor));
console.log(totalDoDobroDaSomaDosPares);
