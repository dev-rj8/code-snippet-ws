var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hello Code Snippet! <br> <p> Service under construction</p>");
});
app.listen(5000);