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
      shopName: {
        type: DataTypes.STRING,
        validate: { notEmpty: {
          msg: "Shop Name Harus Diisi!"
        }}
      },
      displayPicture: {
        type: DataTypes.STRING,
        validate: { notEmpty: {
          msg: "Display Picture Harus Diisi!"
        }}
      },
      address: {
        type: DataTypes.STRING,
        validate: { notEmpty: {
          msg: "Address Harus Diisi!"
        }}
      },
      phone: {
        type: DataTypes.STRING,
        validate: { notEmpty: {
          msg: "Nomer Handhone Harus Diisi!"
        }}
      },
      UserId: DataTypes.INTEGER,
      lat: {
        type: DataTypes.STRING,
        validate: { notEmpty: {
          msg: "Latitude Harus Diisi!"
        }}
      },
      lng: {
        type: DataTypes.STRING,
        validate: { notEmpty: {
          msg: "Longitude Harus Diisi!"
        }}
      } 
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
