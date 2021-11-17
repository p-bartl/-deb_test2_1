import {Product9, ProductsStore9} from '../../models/product9'
import client from '../../database'
import supertest from 'supertest';
import app from '../../server';
const request = supertest(app);

const store = new ProductsStore9()

describe('Model file: Product',()=>{

    // Create a specified product
    beforeAll(async()=>{
        await store.create({
            name: 'knife',
            price: 10,
            category: 'kitchen_arcticles'
        })
    })

    describe('Do the test methods exist?', () => {
        it('should have: index method', () => {
            expect(store.index).toBeDefined();
        })

        it('should have: show method', () => {
            expect(store.show).toBeDefined();
        })

        it('should have: create method', () => {
            expect(store.create).toBeDefined();
        })
	});

    describe('Does the product model return correct values?',()=>{
        it('create method should return: product', async() =>{
            const result = await store.create({
                name: 'knife',
                price: 10,
                category: 'kitchen_arcticles'
            })
            expect(result).toEqual(jasmine.objectContaining({
                name: 'knife',
                price: 10,
                category: 'kitchen_arcticles'
            }));
        })
    
        it('index method should return: products', async() => {
            const result = await store.index();
            expect(result[0]).toEqual(jasmine.objectContaining({
                category:'kitchen_arcticles'
            }))
        })
    
        it('show method should return: specified product', async () => {
            const result = await store.show('1');
            expect(result).toEqual(jasmine.objectContaining({
                category:'kitchen_arcticles'
            }))
        });
       
    });
    
    describe('Does the product model return correct values when requested via endpoint?',()=>{

        // Create a specified product
        beforeAll(async () => {
            await store.create({
                name: 'ipad',
                price: 350,
                category: 'electronic_articles'
            });
        });

        it('server should return: 200 status', async () => {
            const response = await request.get('/');
            expect(response.status).toBe(200);
        });

        it('index method should return: products', async () => {
            const response = await request
                .get('/products/all')
            expect(response.status).toBe(200);
        
        });

        it('show method should return: specified product', async () => {
            const response = await request
                .get('/products/1')
            expect(response.status).toBe(200);
        
        });

        it('create method should return: product', async () => {
            const response = await request
                .post('/products')
                .send({
                    name: 'knife',
                    price: 10,
                    category: 'kitchen_arcticles'
                });
            expect(response.status).toBe(200);
        });
    });
});