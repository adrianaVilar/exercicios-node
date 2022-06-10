class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado.`);
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligado.`);
      return;
    }

    this.ligado = false;
  }
}
const d1 = new DispositivoEletronico("Smartphone");
d1.ligar();
d1.desligar();
d1.desligar();
console.log(d1);

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }

  ligar() {
    console.log(`Método "ligar" sobrescrito.`);
  }
}

const s1 = new Smartphone("Xiaomi", "Verde", "Redmi Note 8 Pro");
console.log(s1);
console.log(s1.ligado);
s1.ligar();
