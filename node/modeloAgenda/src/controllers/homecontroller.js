// const HomeModel = require("../models/HomeModel");

// //Criar
// HomeModel.create({
//   titulo: "Um título para testar2",
//   descricao: "Uma descrição de teste2",
// })
//   .then((dados) => console.log(dados))
//   .catch((e) => console.log(e));

// //Buscar
// HomeModel.find()
//   .then((dados) => console.log(dados))
//   .catch((e) => console.log(e));

exports.paginaInicial = (req, res) => {
  // req.session.usuario = { nome: "Adriana", logado: true }; // Fica salvo pelo tempo definido para os cookies
  // req.flash("Mensagem temporária"); //Não fica salvo
  res.render("index", {
    titulo: "Aqui vai o <i>título</i> da página",
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
