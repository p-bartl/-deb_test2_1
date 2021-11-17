"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardQueries9 = void 0;
const database_1 = __importDefault(require("../database"));
class DashboardQueries9 {
    //Products by category
    async productByCategory(category) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM products9 WHERE category = ($1)';
            const result = await conn.query(sql, [category]);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not execute SQL command for category name ${category}. Error ${err}`);
        }
    }
    //All Orders by user
    async orderByUserId(userId) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM orders9 WHERE user_id = ($1)';
            const result = await conn.query(sql, [userId]);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not execute SQL command for user id ${userId}`);
        }
    }
    //Orders with status 'active' by user
    async completedOrderByUserId(userId) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM orders9 where user_id = ($1) AND status = \'active\'';
            const result = await conn.query(sql, [userId]);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not execute SQL command for user id ${userId}: ${err}`);
        }
    }
    //Top 5 most popular products
    async fiveMostPopularProduct() {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT name, price, category, SUM(quantity) FROM products9 INNER JOIN orders9 ON products9.id = orders9.product_id GROUP BY products9.id ORDER BY SUM(quantity) DESC LIMIT 5';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not execute SQL command: ${err}`);
        }
    }
}
exports.DashboardQueries9 = DashboardQueries9;
