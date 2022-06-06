const produto = { nome: "Caneca", preco: 2.99 };
const produto2 = { ...produto, material: "alumínio" };

console.log(produto);
produto2.nome = "Xícara";
console.log(produto2);
