import Professor from "../models/Professore";

class ProfessorController {
  async index(req, res) {
    const professores = await Professor.findAll(); // Seleciona todos os professores
    res.json(professores);
  }

  async store(req, res) {
    try {
      console.log(req);
      const professor = await Professor.create(req.body);

      return res.json(professor);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["Faltando ID"],
        });
      }

      const professor = await Professor.findByPk(id);

      if (!professor) {
        return res.status(400).json({
          errors: ["Professor não existe"],
        });
      }
      await professor.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["Faltando ID"],
        });
      }

      const professor = await Professor.findByPk(id);

      if (!professor) {
        return res.status(400).json({
          errors: ["Professor não existe"],
        });
      }

      const professorAtualizado = await professor.update(req.body);
      return res.json(professorAtualizado);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new ProfessorController();
