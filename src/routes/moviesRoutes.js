const express = require("express");

const router = express.Router();

const controller = require("../controllers/moviesControllers");

router.get("/all", controller.getAll);
//routeando e se conectar ao controler

module.exports = router;
