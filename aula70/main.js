function Produtos(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produtos.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produtos.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produtos.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produtos.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

function Caneca(nome, preco, material, estoque) {
  Produtos.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") return;
      estoque = valor;
    },
  });
}

Caneca.prototype = Object.create(Produtos.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produtos("Genérico", 111);
const camiseta = new Camiseta("Regata", 29.9, "Preta");
const caneca = new Caneca("Caneca", 24.99, "Porcelana", 13);
console.log(produto);
console.log(camiseta);
console.log(caneca);
