const pessoas = [
  { nome: "Stefanie", idade: 27 },
  { nome: "Amélia", idade: 36 },
  { nome: "Cristina", idade: 35 },
  { nome: "Meredith", idade: 35 },
  { nome: "Meggye", idade: 30 },
  { nome: "Karev", idade: 37 },
];

const filtroMaisDeCincoLetras = pessoas.filter((obj) => obj.nome.length > 5);
console.log(filtroMaisDeCincoLetras);

const filtroMaisDeTrintaAnos = pessoas.filter((obj) => obj.idade > 30);
console.log(filtroMaisDeTrintaAnos);

const filtroNomeTerminaComA = pessoas.filter((obj) =>
  obj.nome.toLowerCase().endsWith("a")
);
console.log(filtroNomeTerminaComA);
