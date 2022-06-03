const pessoas = [
  { nome: "Stefanie", idade: 27 },
  { nome: "Amélia", idade: 36 },
  { nome: "Cristina", idade: 35 },
  { nome: "Meredith", idade: 35 },
  { nome: "Meggye", idade: 30 },
  { nome: "Karev", idade: 37 },
];

//Imprimir só os nomes
// const soNomes = pessoas.map((valor) => valor.nome);
// console.log(soNomes);

//Remover os nomes do obj
// const soIdade = pessoas.map(function (obj) {
//   delete obj.nome;
//   return obj;
// });
// console.log(soIdade);

//Retornar um novo objeto só com idade
// const idade = pessoas.map(function (obj) {
//   return { idade: obj.idade };
// });
// console.log(idade);

//Adicionar uma chave de ID em cada objeto
const comIds = pessoas.map(function (obj, indice) {
  const newObj = { ...obj };
  newObj.id = indice + 1;
  return newObj;
});
console.log(comIds);
