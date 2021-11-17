"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order9_1 = require("../../models/order9");
const user9_1 = require("../../models/user9");
const product9_1 = require("../../models/product9");
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const request = (0, supertest_1.default)(server_1.default);
const orderModel = new order9_1.OrderStore9();
const userModel = new user9_1.UserHub9();
const productModel = new product9_1.ProductsStore9();
describe('Model file: Orders', () => {
    describe('Do the test methods exist?', () => {
        it('should have: index method', () => {
            expect(orderModel.index).toBeDefined();
        });
        it('should have: show method', () => {
            expect(orderModel.show).toBeDefined();
        });
        it('should have: create method (create order)', () => {
            expect(orderModel.create).toBeDefined();
        });
        it('should have: create method (create product within order)', () => {
            expect(orderModel.addOrder).toBeDefined();
        });
    });
    describe('Does the order model return correct values?', () => {
        beforeAll(async () => {
            await userModel.create({
                first_name: 'TestTest',
                last_name: 'User',
                password: 'test123'
            });
            await productModel.create({
                name: 'knife',
                price: 10,
                category: 'kitchen_arcticles'
            });
            await orderModel.create({
                id: 1,
                user_id: 1,
                status: 'active'
            });
        });
        it('create method (create order) should return: order', async () => {
            const result = await orderModel.create({
                user_id: 1,
                status: 'active'
            });
            expect(result).toEqual(jasmine.objectContaining({
                user_id: '1'
            }));
        });
        it('index method should return: orders', async () => {
            const result = await orderModel.index();
            expect(result).toEqual(jasmine.objectContaining([
                {
                    id: 1,
                    user_id: '1',
                    status: 'active'
                }
            ]));
        });
        it('create method (create product within order) should return: order_product', async () => {
            const result = await orderModel.addOrder({
                product_id: 1,
                quantity: 2,
                order_id: 1
            });
            expect(result).toEqual(jasmine.objectContaining({
                order_id: '1'
            }));
        });
    });
    describe('Does the order model return correct values when requested via endpoint?', () => {
        beforeAll(async () => {
            await userModel.create({
                first_name: 'TestTest',
                last_name: 'User',
                password: 'test123'
            });
            await productModel.create({
                name: 'knife',
                price: 10,
                category: 'kitchen_arcticles'
            });
            await orderModel.addOrder({
                product_id: 1,
                quantity: 2,
                order_id: 1
            });
        });
        it('server should return: 200 status', async () => {
            const response = await request.get('/');
            expect(response.status).toBe(200);
        });
        it('index method should return: orders', async () => {
            const response = await request
                .get('/orders');
            expect(response.status).toBe(200);
        });
        it('create method (create order) should return: order', async () => {
            const response = await request
                .post('/orders')
                .send({
                "user_id": 4,
                "status": "active"
            });
            expect(response.status).toBe(401);
        });
        it('create method (create product within order) should return: order_product', async () => {
            const response = await request
                .post('/orders/1/products')
                .send({
                "product_id": 1,
                "quantity": 2
            });
            expect(response.status).toBe(401);
        });
    });
});
