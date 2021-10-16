const express = require('express');
const app = express();
app.get("/", function(req, res){
  res.send("<h1>Hello World!</h1>");
});
app.get("/contact", function(req,res){
  res.send("Contact @ harshitha.t@mca.christuniversity.in");
});
app.get("/about", function(req,res){
  res.send("<em><h1>About me!</h1></em><h3>Hi am Harshitha and I love to develop.</h3>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
//
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
