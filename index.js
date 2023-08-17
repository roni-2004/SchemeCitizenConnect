var express = require("express");

var app = express();

app.listen(3000);

app.use(express.json());

app.get("/home", (req, res) => {
  res.sendFile("login.html", { root: __dirname });
});

app.post("/contact", (req, res) => {
  console.log(req.body);
});
