"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "thriftshop",
          password: "$2a$10$i8qa8kkqVIGkcyVB74c6suQYfp7hWE/apzbAN95BINB0HlpEpi.5a",
          email: "thriftshop123@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "lunaclothing",
          password: "$2a$10$n34as873a7hw4GYhFoGdMO/9JssNc6VJIgOy04ggscfwLH7g05zKG",
          email: "luna.cloth@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "bobabu",
          password: "$2a$10$mNsiNiosJbtqGHxpLNOkgezAgAb1Js3RiCwkmHaRWfqEhBDS3gbGm",
          email: "bobabu@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
