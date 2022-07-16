import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Aluno from "../models/Aluno";
import User from "../models/User";
import Foto from "../models/Foto";
import Professor from "../models/Professore";

const models = [Aluno, User, Foto, Professor];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
