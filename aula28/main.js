//Com array

const frutas = ["Maçã", "Pêra", "Uva"];

for (let i in frutas) {
  console.log(i, "->", frutas[i]);
}

//Com objeto

const pessoa = {
  nome: "Adriana",
  sobrenome: "Vilar",
  idade: 28,
};

for (let i in pessoa) {
  console.log(i, ":", pessoa[i]);
}
