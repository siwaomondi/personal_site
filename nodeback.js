const PORT = 8000;
const subdomain = require("express-subdomain");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config;

const app = express();
var router = express.Router();

app.use(cors);

app.get("/", (req, res) => {
    res.json("hi");
});

app.use(subdomain(process.env.REACT_APP_CUCYVIBVNKFD, router));
app.listen(8000, () => {
    console.log(`listening on port ${PORT}`);
});
