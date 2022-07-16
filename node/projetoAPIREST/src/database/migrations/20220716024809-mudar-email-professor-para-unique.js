module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.changeColumn("professores", "email", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    }),

  down: () => {},
};
