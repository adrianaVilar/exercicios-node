import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Adri",
      sobrenome: "Vilar",
      // email: "adriana.correa@outlook.com",
      idade: 28,
      peso: 51.0,
      altura: 1.57,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
