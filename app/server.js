const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./models/index.js');
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./routes/user.routes.js")(app);

// set port, listen for requests
module.exports = app;