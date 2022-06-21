// const fs = require("fs").promises;
// const path = require("path");
// const caminhoArquivo = path.resolve(__dirname, "..", "teste.txt");

// fs.writeFile(caminhoArquivo, "Frase 1\n", { flag: "a", encoding: "utf-8" });

const fs = require("fs").promises;

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: "w" });
};
