// const nome = "Adriana";
// const sobrenome = "Vilar";

// const falaNome = () => {
//   console.log(nome, sobrenome);
// };

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.Nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = "O escopo do 'this' também é do 'exports'";

// console.log(exports);

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;
