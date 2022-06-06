//Getter e Setter

function Produtos(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("Digite um número válido");
      }
    },
  });
}

const p1 = new Produtos("Camiseta", 20.99, 7);
console.log(p1);
//p1.estoque = "adasd";
console.log(p1.estoque);
