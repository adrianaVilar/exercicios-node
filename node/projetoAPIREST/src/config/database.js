require("dotenv").config();

module.exports = {
  dialect: "mariadb",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true, // converte de camelCase para underline
    underscoredAll: true,
    createdAt: "created_at", // tem um bug que as vezes o underscored não funciona, então se usa assim para garantir que vai converter esses itens
    updatedAt: "updated_at",
  },
  dialectOptions: {
    timezone: "America/Sao_Paulo",
  },
  timezone: "America/Sao_Paulo",
};
