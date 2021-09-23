const express = require("express");
const route = express.Router();
const Controller = require("../controllers/controller");

// PROFILE PAGE
route.get("/min-stock/:id"); // dari button (-) stock by id
route.get("/:UserId"); //  dari button see profile by id
route.get("/:UserId/edit"); // dari /:id ada button edit
route.post("/:UserId/edit");
module.exports = route;