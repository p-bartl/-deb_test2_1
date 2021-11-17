"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard9_1 = require("../services/dashboard9");
const verifyAuthToken9_1 = __importDefault(require("./verifyAuthToken9"));
const dashboard_routes9 = (app) => {
    app.get('/products-by-category', productByCategory);
    app.get('/order-by-userid', verifyAuthToken9_1.default, orderByUserId);
    app.get('/complete-order-by-userid', verifyAuthToken9_1.default, completedOrderByUserId);
    app.get('/five-most-popular-product', fiveMostPopularProduct);
};
const dashboard = new dashboard9_1.DashboardQueries9();
//Products by category
const productByCategory = async (_req, res) => {
    const products = await dashboard.productByCategory(_req.body.category);
    res.json(products);
};
//All Orders by user
const orderByUserId = async (_req, res) => {
    const orders = await dashboard.orderByUserId(_req.body.user_id);
    res.json(orders);
};
//Orders with status 'active' by user
const completedOrderByUserId = async (_req, res) => {
    const orders = await dashboard.completedOrderByUserId(_req.body.user_id);
    res.json(orders);
};
//Top 5 most popular products
const fiveMostPopularProduct = async (_req, res) => {
    const products = await dashboard.fiveMostPopularProduct();
    res.json(products);
};
exports.default = dashboard_routes9;
