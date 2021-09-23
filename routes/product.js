const express = require("express");
const route = express.Router();
const Controller = require("../controllers/controller");

route.get("/:id", Controller.productList); // product page (habis login)
route.get("/:UserId/edit/:id"); // dari button edit product
route.post("/:UserId/edit/:id");
route.get("/:UserId/add/:id"); // dari button add product
route.post("/:UserId/add/:id");
route.get("/:UserId/delete/:id"); // dari button delete product by id



module.exports = route