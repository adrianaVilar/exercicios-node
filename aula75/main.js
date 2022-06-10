const pessoas = [
  { id: 3, nome: "Adriana" },
  { id: 2, nome: "Adriane" },
  { id: 1, nome: "Adriani" },
];

// const novasPessoas = {};

// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }

// console.log(novasPessoas);

const novasPessoas = new Map();

for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);
console.log(novasPessoas.get(3));

//Destructor:
for (const [identifier, { id, nome }] of novasPessoas) {
  console.log(identifier, id, nome);
}

//Deletar:
novasPessoas.delete(2);
console.log(novasPessoas);
