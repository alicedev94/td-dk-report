const express = require("express");
const app = express();
const port = 3000;
require("./lib/sequelize");

//middlewares
app.use(express.json());

app.get("/", function(req, res) {
    res.send("hello world!");
});

app.listen(port, function() {
    console.log("run in port " + port);
});

module.exports = app;