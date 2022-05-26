const pessoa = {
  nome: "Adriana",
  sobrenome: "Vilar",
  idade: 27,
  endereço: {
    rua: "Nome da rua",
    num: 123,
  },
};

const { nome, sobrenome, ...resto } = pessoa;
console.log(resto);
