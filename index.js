const express = require("express");
const app = express();
var UserRoute = require("./routes/UserRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.use("/", UserRoute);

app.listen("3000", function() {
    console.log("Calculadora Funcionando");
});