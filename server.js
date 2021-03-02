const express = require("express");
const dotenv = require("dotenv").config();
const ejs = require("ejs");
const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(process.env.PORT, () => {
  console.log(`Server started on ${process.env.PORT}`);
});
