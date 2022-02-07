"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var sjcl = require("sjcl");
var Pool = require("pg").Pool;
// db configuration
var pool = new Pool({
    host: "host.docker.internal",
    database: "postgres",
    user: "postgres",
    password: "database1",
    port: 5432
});
// basic endpoint
var index = function (request, response) {
    response.status(200).json({ info: "Application started successfully" });
};
//creating database
pool
    .query("CREATE DATABASE postgres;")
    .then(function (res) { return console.log("created database successfully", res); })["catch"](function (err) {
    return console.log("there was an error in creating database :", err);
});
// creating pre-orders table
pool
    .query("CREATE TABLE IF NOT EXISTS PRE_ORDERS (id SERIAL PRIMARY KEY, order_id INTEGER NOT NULL, first_name VARCHAR(40) NOT NULL,\n  last_name VARCHAR(40) NOT NULL,\n  quantity VARCHAR(40) NOT NULL,\n  city VARCHAR(40) NOT NULL,\n  province VARCHAR(40) NOT NULL,\n  country VARCHAR(40) NOT NULL)")
    .then(function (res) { return console.log(res); })["catch"](function (err) { return err; });
// save new order
var save = function (request, response) {
    console.log("New order saved");
    //decrypting incoming data
    var password = "encryptData71&$";
    var decryptedText = sjcl.decrypt(password, request.body.name);
    var name = decryptedText.split(" ");
    var first_name = name[0];
    var last_name = name[1];
    var _a = request.body, id = _a.id, quantity = _a.quantity, city = _a.city, province = _a.province, country = _a.country;
    pool
        .query("INSERT INTO pre_orders (order_id, first_name, last_name, quantity, city, province, country) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [id, first_name, last_name, quantity, city, province, country])
        .then(function (res) {
        return response.send(__assign(__assign({}, res.rows[0]), { first_name: request.body.name, last_name: request.body.name }));
    });
};
// helper method
function error(err, response) {
    if (err) {
        // console.log(err);
        response.status(503).json({ info: "Some internal server error occurred" });
    }
}
module.exports = {
    index: index,
    save: save
};
