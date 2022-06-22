const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homecontroller");
const contatoController = require("./src/controllers/contatocontroller");

function meuMiddleware(req, res, next) {
  console.log();
  console.log("Passei pelo middleware");
  console.log();
  next();
}

//Rotas da Home
route.get("/", meuMiddleware, homeController.paginaInicial);
route.post("/", homeController.trataPost);

//Rotas de contato
route.get("/contato", contatoController.paginaInicial);

module.exports = route;
