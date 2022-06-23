const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String,
});

const HomeModel = mongoose.model("Home", HomeSchema);

module.exports = HomeModel;

/*Num projeto real, o correto seria validar o dados e só depois exportar:

class Home{

}

module.exports = Home;
*/
