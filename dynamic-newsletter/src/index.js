const express = require("express");
const path = require("path");
const app = express();
const port = 9000;

const staticPath = path.join(__dirname, "../views/");
// app.use(express.static(staticPath));

app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index.hbs");
});

app.get("/", (req, res) => {
  res.spend("Hello there");
});

app.listen(port, () => {
  console.log(`${port}`);
});
