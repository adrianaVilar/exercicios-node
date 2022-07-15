const bcryptjs = require("bcryptjs");

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Robin",
          email: "robin.carev@hotmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Robin2",
          email: "robin.carev2@hotmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Robin3",
          email: "robin.carev3@hotmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: () => {},
};
