import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
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
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: " ",
          validate: {
            isInt: {
              msg: "A idade precisa ser um número inteiro",
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: " ",
          validate: {
            isFloat: {
              msg: "O peso precisa ser um número inteiro ou de ponto flutuante",
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: " ",
          validate: {
            isFloat: {
              msg: "A altura precisa ser um número inteiro ou de ponto flutuante",
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
