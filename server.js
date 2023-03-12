var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");

var server = require("http").Server(app);
server.listen(8000);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

require("./controllers/game")(app);