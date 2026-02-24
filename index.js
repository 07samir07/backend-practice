require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/twitter", (req, res) => {
  res.send("hmmm");
});
app.get("/login", (req, res) => {
  res.send("<h1>Login at this whatever this is</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>Samir is his name</>");
});
app.listen(process.env.PORT, () => {
  console.log(`App listening to port ${PORT}`);
});
