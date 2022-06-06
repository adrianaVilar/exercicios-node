function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto("Camiseta", 50);
p1.desconto(50);
p1.aumento(25);

console.log(p1);

//Literal
const p2 = {
  nome: "Caneta",
  preco: 7.99,
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(50);
console.log(p2);

const p3 = Object.create(Object.prototype);
const p4 = Object.create(Produto.prototype);

console.log(p3);
console.log(p4);
