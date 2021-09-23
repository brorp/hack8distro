"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "thriftshop",
          password: 123312,
          email: "thriftshop123@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "lunaclothing",
          password: "ggkkll22",
          email: "luna.cloth@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "bobabu",
          password: "bbbb444",
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
