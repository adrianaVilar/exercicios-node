module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("fotos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // chave estrangeira
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          // a referência é:
          model: "alunos", // a tabela 'alunos'
          key: "id", // usando a chave 'id'
        },
        // o que vai acontecer com o registro quando apagar pelo ID
        // Se for "CASCADE" apaga tudo OU  pode deixar nulo:
        onDelete: "SET NULL", // Se deixar 'nulo', o 'allowNull' tem que ser true
        // O que faz quando o Id do aluno for atualizado
        onUpdate: "CASCADE", // atualiza tudo
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("fotos"),
};
