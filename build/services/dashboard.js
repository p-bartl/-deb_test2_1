"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardQueries = void 0;
const database_1 = __importDefault(require("../database"));
class DashboardQueries {
    // Get all products that have been included in orders
    async productsInOrders() {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT name, price, order_id FROM products INNER JOIN order_products ON products.id = order_products.id';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`unable get products and orders: ${err}`);
        }
    }
    // Get all users that have made orders
    async usersWithOrders() {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT first_name, last_name FROM users INNER JOIN orders ON users.id = orders.user_id';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`unable get users with orders: ${err}`);
        }
    }
    // Get all users that have made orders
    async fiveMostExpensive() {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT name, price FROM products ORDER BY price DESC LIMIT 5';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`unable get products by price: ${err}`);
        }
    }
}
exports.DashboardQueries = DashboardQueries;
