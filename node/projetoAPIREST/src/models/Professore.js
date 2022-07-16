import Sequelize, { Model } from "sequelize";

export default class Professore extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: " ",
          validate: {
            len: {
              args: [3, 255],
              msg: "Nome precisa ter entre 3 e 255 caracteres",
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: " ",
          validate: {
            len: {
              args: [3, 255],
              msg: "Sobrenome precisa ter entre 3 e 255 caracteres",
            },
          },
        },
        materia: {
          type: Sequelize.STRING,
          defaultValue: " ",
          validate: {
            len: {
              args: [3, 255],
              msg: "Matéria precisa ter entre 3 e 255 caracteres",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: " ",
          unique: {
            msg: "E-mail já cadastrado",
          },
          validate: {
            isEmail: {
              msg: "Email inválido",
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
