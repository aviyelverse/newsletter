const express = require("express");
const path = require("path");
const app = express();
const port = 9000;

const staticPath = path.join(__dirname, "../views/");
// app.use(express.static(staticPath));

app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index.hbs", {
    aviyelNewsletterTitle: "Aviyel Newsletter",
    issueAndDate: "Issue 3 | 06/01/2022",
    gardeningBigImage:
      "https://user-images.githubusercontent.com/37651620/147542872-e3499b05-c33a-484c-952f-c850b361f05f.png",
    readTitle: "READ",
    
  });
});

app.get("/", (req, res) => {
  res.spend("Hello there");
});

app.listen(port, () => {
  console.log(`${port}`);
});
