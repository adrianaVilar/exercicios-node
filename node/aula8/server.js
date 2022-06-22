const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
  <form action='/' method="POST">
  Nome do cliente: <input type="text" name="nome">
  <button>Clique aqui</button>
  </form>`);
});

app.get("/testes/:IdUsuarios?/:parametro?", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  // res.send(req.params.IdUsuarios);
  res.send(req.query.facebookprofile);
});

app.post("/", (req, res) => {
  res.send(`O que foi enviado foi: ${req.body.nome}`);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
