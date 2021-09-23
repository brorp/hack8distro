"use strict";
const { Model } = require("sequelize");
const { Sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  Profile.init(
    {
      shopName: DataTypes.STRING,
      displayPicture: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.BIGINT,
      UserId: DataTypes.INTEGER,
      lat: DataTypes.STRING,
      lng: DataTypes.STRING 
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
