const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homecontroller");
const contatoController = require("./src/controllers/contatocontroller");

//Rotas da Home
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

//Rotas de contato
route.get("/contato", contatoController.paginaInicial);

module.exports = route;
