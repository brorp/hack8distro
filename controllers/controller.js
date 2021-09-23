const { User, Profile, Category, Product } = require("../models/index");
const { Op } = require("sequelize");
var bcrypt = require("bcryptjs");
const session = require("express-session");

class Controller {
  // HOME PAGE
  static home(req, res) {
    Product.findAll()
      .then((data) => {
        res.render("home", { data: data });
      })
      .catch((error) => {
        res.send(error);
      });
  }
  //LOGIN PAGE
  static getLoginPage(req, res) {
    res.render("login.ejs");
  }

  static postLoginPage(req, res) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((data) => {
        let msg = "Email / Password SALAH!"
        if (!data) {
          res.render("login.ejs", {msg});
        } else {
          const password = bcrypt.compareSync(req.body.password, data.password); // true
          if (password) {
            data.getProfile()
            .then((profile) => {
              req.session.sessionData = {
                isLogin: true,
                id: data.id,
                shopName: profile.shopName,
                username: data.username,
                email: data.email,
                displayPicture: profile.displayPicture,
                address: profile.address,
                phone: profile.phone,
              }
              // console.log("masuk sini");
              res.redirect(`/products/${data.id}`)
            })
          } else {
            res.render("login.ejs", {msg});
          }
        }
      })
      .catch((err) => {
        res.send(err)
      });
  }

    static getLogOut(req, res){
      req.session.destroy()
      res.redirect('/')
    }

  // ADD USER

  static getRegister(req, res) {
    res.render("registerForm");
  }

  static postRegister(req, res) {
    let { username, password, email, shopName, displayPicture, address, phone, lat, lng } = req.body;
    User.create({ username, password, email })
    Profile.create({shopName, displayPicture, address, phone, lat, lng})
    .then(() => {
      let successRegister = "Registrasi Berhasil, silahkan Log In"
      res.render("login", {successRegister} )
    })
    .catch((err) => {
      res.send(err)
    })
  }

  static productList(req, res) {
    Product.findAll({
      where: {
        UserId: req.params.id,
      },
    })
      .then((data) => {
        res.render("products", {data: data}); // page habis login //
      })
      .catch((error) => {
        res.send(error);
      });
  }

  // PRODUCT

  static productAddForm(req, res) {
    Product.findAll({
      include: [{ model: Category }],
    })
      .then((data) => {
        res.render("product-add-form", { data: data });
      })
      .catch((error) => {
        res.send(error);
      });
  }

  static productAddPost(req, res) {
    let { productName, imageUrl, description, price, stock, CategoryId } =
      req.body;
    Product.create(
      { productName, imageUrl, description, price, stock, CategoryId },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((data) => {
        res.redirect("/products");
      })
      .catch((error) => {
        res.send(error);
      });
  }

  static productEditForm(req, res) {
    Category.findAll()
      .then((data) => {
        res.render("product-edit-form", { data: data });
      })
      .catch((error) => {
        res.send(error);
      });
  }

  static productEditPost(req, res) {
    let { productName, imageUrl, description, price, stock, CategoryId } =
      req.body;
    Product.update(
      { productName, imageUrl, description, price, stock, CategoryId },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((data) => {
        res.redirect("/products");
      })
      .catch((error) => {
        res.send(error);
      });
  }

  static deleteProduct(req, res) {
    Product.destroy({
      where: {
        id: req.params.id,
      },
    });
  }

  static minStock(req, res) {
    Product.decrement("stock", {
      where: {
        id: req.params.id,
        stock: {
          [Op.gt]: 0,
        },
      },
    })
      .then(() => res.redirect("/products"))
      .catch((err) => res.send(err));
  }

  // PROFILES

  static profileUserId(req, res) {
    Profile.findByPk({
      where: {
        UserId: req.params.id,
      },
    })
      .then((data) => res.render("profile-page", { data }))
      .catch((err) => res.send(err));
  }

  static profileEditForm(req, res) {}

  static profileEditPost(req, res) {
    let { fullName, displayPicture, address, phone } = req.body;
    Profile.update(
      { fullName, displayPicture, address, phone },
      {
        where: {
          UserId: req.params.id,
        },
      }
    )
      .then(() => res.redirect("/profiles/:UserId"))
      .catch((err) => res.send(err));
  }
}

module.exports = Controller;
