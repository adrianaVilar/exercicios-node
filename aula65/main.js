const produto = { nome: "Caneca", preco: 2.99 };
const produto2 = { ...produto, material: "alumínio" };

console.log(produto);
produto2.nome = "Xícara";
console.log(produto2);

Object.freeze(produto);
produto.nome = "Prato"; // Essa alteração não vai ocorrer, por causa da linha 8
produto2.nome = "Pires";

console.log(produto);
console.log(produto2);
