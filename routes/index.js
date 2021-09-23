const express = require("express");
const route = express.Router();
const Controller = require("../controllers/controller");
const routeProfile = require("./profile")
const routeProducts = require("./product")
route.use("/products", routeProducts);
route.use("/profiles", routeProfile)

route.get("/", Controller.home); // landing page
route.get("/login", Controller.getLoginPage); //
route.post("/login", Controller.postLoginPage); //
route.get("/logout", Controller.postLoginPage);

// ADD USER FORM
route.get("/add-user", Controller.getRegister); // add user (form)
route.post("/add-user", Controller.postRegister); // add user (form)

// PRODUCT PAGE


module.exports = route;
