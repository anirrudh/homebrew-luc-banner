//Put in requirements
var express = require("express");

var app = express();

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

//Landing Page
app.get("/", function(req, res){
   res.render("splash");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});