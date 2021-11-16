"use strict";
// import express, { Request, Response } from 'express'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const mythical_weapons_1 = __importDefault(require("./handlers/mythical_weapons"));
// //import articles_routes from './handlers/article'
// //import user_routes from './handlers/users'
// import user2_routes from './handlers/users2'
// import mythical_weapon_routes2 from './handlers/mythical_weapons2'
// import orderRoutes from './handlers/orders'
// import productRoutes from './handlers/products'
// import dashboardRoutes from './handlers/dashboards'
const user9_1 = __importDefault(require("./handlers/user9"));
const product9_1 = __importDefault(require("./handlers/product9"));
const order9_1 = __importDefault(require("./handlers/order9"));
const dashboard9_1 = __importDefault(require("./handlers/dashboard9"));
const app = express();
const address = "0.0.0.0:3000";
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
(0, mythical_weapons_1.default)(app);
// //articles_routes(app)
// //user_routes(app)
// user2_routes(app)
// mythical_weapon_routes2(app)
// orderRoutes(app)
// productRoutes(app)
// dashboardRoutes(app)
(0, user9_1.default)(app);
(0, product9_1.default)(app);
(0, order9_1.default)(app);
(0, dashboard9_1.default)(app);
app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
});
exports.default = app;
