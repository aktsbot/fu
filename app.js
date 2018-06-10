const express = require("express");
const efup = require("express-fileupload");
const morgan = require("morgan");
const app = express();
const routes = require("./router");

app.use(efup());
app.use(morgan("short"));
app.use(routes);

module.exports = app;
