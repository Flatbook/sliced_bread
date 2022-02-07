"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// import express, { Application, Request, Response } from "express";
var express = require("express");
var postgres_1 = require("./postgres");
var sjcl = require("sjcl");
var cors = require("cors");
var insertOrder = function (db, values) {
    return db
        .query("INSERT INTO orders (id, first_name, last_name, quantity, city, province, country)\n      VALUES ($1, $2, $3, $4, $5, $6, $7)\n      RETURNING *", values)
        .then(function (res) { return res.rows[0]; })["catch"](function (err) { return console.log("BREAKS HERE", err); });
};
(0, postgres_1.getPostgresClient)()
    .then(function (pgClient) {
    console.log("connected to db!");
    var app = express();
    app.use(cors({
        origin: "http://localhost:3000"
    }));
    app.use(express.json());
    app.use(express.urlencoded());
    app.get("/", function (req, res) {
        res.send("HELLO");
    });
    // app.get("/order/:id", async (req, res) => {
    //   console.log("REQ", req.params);
    //   const id = req.params.id;
    //   const data = await pgClient.query(
    //     `SELECT * FROM public.photographer WHERE id = ${id};`
    //   );
    //   res.send(data.rows);
    // });
    app.post("/order/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var password, decryptedText, name, first_name, last_name, _a, id, city, province, country, values;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    password = "encryptData71&$";
                    decryptedText = sjcl.decrypt(password, req.body.name);
                    console.log("decrypteddd", decryptedText);
                    console.log("REQ", req.body);
                    name = decryptedText.split(" ");
                    first_name = name[0];
                    last_name = name[1];
                    _a = req.body, id = _a.id, city = _a.city, province = _a.province, country = _a.country;
                    values = [id, first_name, last_name, city, province, country];
                    return [4 /*yield*/, insertOrder(pgClient, values).then(function () {
                            return console.log("data insterted!");
                        })];
                case 1:
                    _b.sent();
                    res.send(id);
                    return [2 /*return*/];
            }
        });
    }); });
    app.listen(5002, function () { return console.log("Server running"); });
})["catch"](function (err) {
    console.error("Error connecting to postgres: ", err);
});
