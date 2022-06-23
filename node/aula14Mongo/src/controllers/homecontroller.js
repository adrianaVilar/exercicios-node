const HomeModel = require("../models/HomeModel");

//Criar
HomeModel.create({
  titulo: "Um título para testar2",
  descricao: "Uma descrição de teste2",
})
  .then((dados) => console.log(dados))
  .catch((e) => console.log(e));

//Buscar
HomeModel.find()
  .then((dados) => console.log(dados))
  .catch((e) => console.log(e));

exports.paginaInicial = (req, res) => {
  res.render("index");
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
