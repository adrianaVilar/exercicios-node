module.exports = {
  up: (queryInterface, Sequelize) =>
    // Usando "nome" pq não criei "email"
    queryInterface.changeColumn("alunos", "nome", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    }),

  down: () => {},
};
