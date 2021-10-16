const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.post("/index.html", function(req, res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var result = weight/(height*height);
  console.log("Your BMI result is = " +result);
  res.send("Your BMI result is = " +result);
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
