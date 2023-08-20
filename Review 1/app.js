var express = require("express");

var app = express();

app.listen(8000);

app.use(express.json());

app.use(express.static("/Images"));

app.use(express.static("/css"));

app.use(express.static(__dirname + '/public'));

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
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/query", (req, res) => {
  res.sendFile("query.html", { root: __dirname });
});

app.get("/feedback", (req, res) => {
  res.sendFile("query.html", { root: __dirname });
});

app.get("/dash", (req, res) => {
  res.sendFile("main.html", { root: __dirname });
});


app.post("/contact", (req, res) => {
  console.log(req.body);
});

