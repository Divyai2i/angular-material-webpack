const express = require("express");

var app = express();

app.use( express.static("./public/"));


app.get("/", (req, res) => {
  res.sendFile( __dirname + "/index.html");
});


app.listen(3000, () => {
  console.log("app started on port 3000");
});
