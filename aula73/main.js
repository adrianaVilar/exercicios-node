class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    console.log(`${nome} está falando.`);
  }
  comer() {
    console.log(`${nome} está comendo.`);
  }
  beber() {
    console.log(`${nome} está bebendo.`);
  }
}

const p1 = new Pessoa("Adriana", "Vilar");
