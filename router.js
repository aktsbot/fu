const express = require("express");
const controller = require("./controller");
const config = require("./config");
const path = require("path");

const router = express.Router();

router.get("/health", controller.getHealth);
router.post("/file", controller.uploadFile);
router.use("/file", express.static(`${config.uploadLocation}`));

module.exports = router;
