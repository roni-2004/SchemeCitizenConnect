var express = require("express");

var app = express();

app.listen(8000);

app.use(express.json());

app.use("/images", express.static("images"));

app.get("/main", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/login", (req, res) => {
  res.sendFile("./login.html", { root: __dirname });
});

app.get("/register", (req, res) => {
  res.sendFile("./register.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./About Us/about.html", { root: __dirname });
});

app.post("/contact", (req, res) => {
  console.log(req.body);
});
