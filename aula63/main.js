function Produtos(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    value: estoque,
    writable: true,
    configurable: false,
  });
}

const p1 = new Produtos("Camiseta", 20.99, 7);
console.log(p1);
