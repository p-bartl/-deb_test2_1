"use strict";
// import express, { Request, Response } from 'express'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const mythical_weapons_1 = __importDefault(require("./handlers/mythical_weapons"));
//import articles_routes from './handlers/article'
const app = express();
const address = "0.0.0.0:3000";
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
(0, mythical_weapons_1.default)(app);
//articles_routes(app)
app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
});
