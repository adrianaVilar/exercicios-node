function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  //   this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

const p1 = new Pessoa("Meredith", "Grey");
const p2 = new Pessoa("Cristina", "Yang");

console.dir(p1);
console.dir(p2);
