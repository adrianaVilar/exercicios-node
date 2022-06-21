const path = require("path");
const caminhoDoJson = path.resolve(__dirname, "teste.json");
const escreve = require("./modules/escreve");
const ler = require("./modules/ler");

//Cria:
// const pessoas = [
//   { nome: "Adriana" },
//   { nome: "Judithie" },
//   { nome: "Camhélia" },
// ];
// const json = JSON.stringify(pessoas, "", 2);
// escreve(caminhoDoJson, json);

//Lê:
async function leArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  console.log(dados);
}

leArquivo(caminhoDoJson);
