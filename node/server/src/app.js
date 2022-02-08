var express = require("express");
var api = require("./postgres");
var app = express();
var port = 3001;
var cors = require("cors");
app.use(cors({
    origin: "http://localhost:4001"
}));
app.use(express.json());
app.use(express.urlencoded());
app.get("/", api.index);
app.post("/order/:id", api.save);
app.listen(port, function () {
    console.log("Application listening on port ".concat(port));
});
