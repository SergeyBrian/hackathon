const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();


app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("main", {});
});

app.get("/dev/Login", function (req, res) {
  res.send("uid: " + req.param('uid') + "<br>first name: " + req.param('first_name') + "<br>second name: " +
      req.param('second_name') + "<br>photo url: " + req.param('photo'));
});

app.post("/registration", function (req, res){
  res.render("registration", {})
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000.");
});