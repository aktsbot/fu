const express = require("express");
const controller = require("./controller");

const router = express.Router();

router.get("/health", controller.getHealth);

module.exports = router;
