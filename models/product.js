'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, { foreignKey: 'CategoryId' })
      Product.belongsTo(models.User, { foreignKey: 'UserId' })
    }
    //instance method
    static convertToRupiah(angka){
      var rupiah = '';		
      var angkarev = angka.toString().split('').reverse().join('');
      for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
      return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
    }
    isPremium(){
      if(this.price > 1000000){
        return `(PREMIUM) ${this.productName}`
      } else {
        return this.productName
      }
    }
  };

  Product.init({
    productName: {
      type: DataTypes.STRING,
      validate: { notEmpty: {
        msg: "Product Name Harus Diisi!"
      }}
    },
    imageUrl: {
      type: DataTypes.STRING,
      validate: { notEmpty: {
        msg: "Image URL Harus Diisi!"
      }}
    },
    description: {
      type: DataTypes.STRING,
      validate: { notEmpty: {
        msg: "Deskripsi Produk Harus Diisi!"
      }}
    },
    price: {
      type: DataTypes.STRING,
      validate: { notEmpty: {
        msg: "Harga Produk Harus Diisi!"
      }}
    },
    stock: {
      type: DataTypes.STRING,
      validate: { notEmpty: {
        msg: "Stock Produk Harus Diisi!"
      }}
    },
    CategoryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};