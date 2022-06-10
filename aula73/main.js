class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    console.log(`${this.nome} está falando.`);
    return;
  }

  comer() {
    console.log(`${this.nome} está comendo.`);
  }

  beber() {
    console.log(`${this.nome} está bebendo.`);
  }
}

const p1 = new Pessoa("Adriana", "Vilar");
console.log(p1);
console.log(p1.falar());
console.log(p1.comer());
console.log(p1.beber());
