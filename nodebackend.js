const PORT = 8000;
const subdomain = require("express-subdomain");
const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config;

const app = express();
var router = express.Router();

app.use(cors);
app.use(express.static(path.join(__dirname,"build")))


app.get("/*", (req, res) => {
    res.json("hi");
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(subdomain(process.env.REACT_APP_CUCYVIBVNKFD, router));
app.listen(8000, () => {
    console.log(`listening on port ${PORT}`);
});
