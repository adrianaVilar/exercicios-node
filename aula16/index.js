const pessoa1 = {
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
pessoa1.fala();
