/*const pessoa1 = {
  nome: "Adriana",
  sobrenome: "Vilar",
  idade: 27,

  fala() {
    console.log(`Minha idade é ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();*/

function criarPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const p1 = criarPessoa("Adriana", "Vilar", 27);
const p2 = criarPessoa("Érick", "Lopes", 28);

console.log(p1.nome, p2.nome);
