"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order9_1 = require("../models/order9");
const verifyAuthToken9_1 = __importDefault(require("./verifyAuthToken9"));
const store = new order9_1.OrderStore9();
// returns all orders
const index = async (_req, res) => {
    const orders = await store.index();
    res.json(orders);
};
// returns a specified order
const show = async (req, res) => {
    const order = await store.show(req.params.id);
    res.json(order);
};
// create a new order
const create = async (req, res) => {
    const order = {
        user_id: req.body.user_id,
        status: req.body.status,
    };
    try {
        const new_order = await store.create(order);
        res.json(new_order);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
// create a new product within an order (product itself must already exist)
const addOrder = async (_req, res) => {
    const op = {
        order_id: parseInt(_req.params.id),
        product_id: _req.body.product_id,
        quantity: _req.body.quantity
    };
    try {
        const addedProduct = await store.addOrder(op);
        res.json(addedProduct);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const order_routes9 = (app) => {
    app.post('/orders', verifyAuthToken9_1.default, create);
    app.get('/orders', index);
    app.get('/orders/:id', verifyAuthToken9_1.default, show);
    app.post('/orders/:id/products', verifyAuthToken9_1.default, addOrder);
};
exports.default = order_routes9;
