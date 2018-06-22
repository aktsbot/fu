const express = require('express');
const efup = require('express-fileupload');
const morgan = require('morgan');
const app = express();
const routes = require('./router');

/*
  for angular dev, the browser shuns us with a CORS error.
  The below line bypasses it. If you're running fu behind nginx,
  add the below headers there too.
*/
if (process.argv[2] === '--with-cors') {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Expose-Headers', 'Location');
    next();
  });
}

app.use(efup());
app.use(morgan('short'));
app.use(routes);

module.exports = app;
