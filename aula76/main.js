const _velocidade = Symbol("velocidade protegida");

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  set velocidade(valor) {
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() {
    return this[_velocidade];
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro("Fusca");

for (let i = 0; i <= 200; i++) {
  c1.acelerar();
}

console.log(c1);
console.log(c1.velocidade);
c1.velocidade = 25;
console.log(c1.velocidade);
c1.velocidade = 255;
console.log(c1.velocidade);
