const express = require("express");
const router = express.Router();
var UserController = require("../controller/UserController");

router.get("/", UserController.calculadora);
router.post("/", UserController.operacao);

module.exports = router;