"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Kaos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kemeja",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Celana Pendek",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Celana Panjang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sepatu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
