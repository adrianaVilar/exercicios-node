const produto = { nome: "Caneca", preco: 2.99 };
const produto2 = { ...produto, material: "alumínio" };

console.log(Object.getOwnPropertyDescriptors(produto, "nome", "preco"));
