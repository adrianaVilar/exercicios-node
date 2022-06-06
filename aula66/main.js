const produto = { nome: "Caneca", preco: 2.99 };
const produto2 = { ...produto, material: "alumínio" };

console.log(Object.getOwnPropertyDescriptors(produto, "nome", "preco"));

console.log(Object.keys(produto));
console.log(Object.values(produto));
console.log(Object.entries(produto));

for (let valor of Object.entries(produto)) {
  console.log(valor[0], valor[1]);
}
