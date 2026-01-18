const express = require("express");
const router = express.Router();
const AdminController = require("./admin.controller");
const auth = require("../../middlewares/auth.middleware.js");
const role = require("../../middlewares/role.middleware.js");

router.post("/create", AdminController.createAdmin);

module.exports = router;
