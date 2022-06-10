class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  static trocaPilha() {
    console.log("Ok, pilha trocada.");
  }
}

const controle = new ControleRemoto("LG");
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
console.log(controle);
ControleRemoto.trocaPilha();
