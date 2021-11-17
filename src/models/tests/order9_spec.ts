import {Order9, OrderStore9} from '../../models/order9';
import {User9, UserHub9} from '../../models/user9';
import {Product9, ProductsStore9} from '../../models/product9';
import client from '../../database';
import supertest from 'supertest';
import app from '../../server';
const request = supertest(app);

const orderModel = new OrderStore9();
const userModel = new UserHub9();
const productModel = new ProductsStore9();



describe('Model file: Orders',()=>{
    describe('Do the test methods exist?',()=>{
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

    })

    describe('Does the order model return correct values?',()=>{
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

			await orderModel.create(
				{
					id:1,
					user_id:1,
					status:'active'
				}
			)
	
		});


		it('create method (create order) should return: order', async () => {
			const result = await orderModel.create({
				user_id: 1,
				status: 'active'
			});
			expect(result).toEqual(
				jasmine.objectContaining({
					user_id: '1'
				})
			);
		});

		it('index method should return: orders',async()=>{
			const result = await orderModel.index();

			expect(result).toEqual(jasmine.objectContaining([
			{
				id:1,
				user_id:'1',
				status:'active'
			}
			]
			)
			
			)
		}) 


		it('create method (create product within order) should return: order_product',async()=>{
			const result = await orderModel.addOrder({
				product_id:1,
				quantity:2,
				order_id:1
			});

			expect(result).toEqual(jasmine.objectContaining({
				order_id:'1'
			}))

		})


    })

	describe('Does the order model return correct values when requested via endpoint?',()=>{

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
				product_id:1,
				quantity:2,
				order_id:1
			})
		});



		it('server should return: 200 status', async () => {
			const response = await request.get('/');
			expect(response.status).toBe(200);
		});

		it('index method should return: orders', async () => {
			const response = await request
				.get('/orders')
			expect(response.status).toBe(200);
		  
		});

		it('create method (create order) should return: order', async () => {
			const response = await request
				.post('/orders')
				.send({
					"user_id":4,
					"status":"active"
				});
			expect(response.status).toBe(401);
		});

		it('create method (create product within order) should return: order_product', async () => {
			const response = await request
				.post('/orders/1/products')
				.send({
					"product_id":1,
					"quantity":2
				});
			expect(response.status).toBe(401);
		});

		


	})
})