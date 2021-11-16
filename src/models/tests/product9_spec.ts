import {Product9, ProductsStore9} from '../../models/product9'
import client from '../../database'
import supertest from 'supertest';
import app from '../../server';
const request = supertest(app);

const store = new ProductsStore9()

describe('Product Model',()=>{

    beforeAll(async()=>{
        await store.create({
            name: 'spoon',
            price: 10,
            category: 'kitchen'
        })
    })

 

    it('should have index method', () => {
        expect(store.index).toBeDefined();
    })

    it('should have show method', () => {
        expect(store.show).toBeDefined();
    })

    it('should have create method', () => {
        expect(store.create).toBeDefined();
    })


    describe('Test Methods',()=>{
        it('create method should add one product', async() =>{
            const result = await store.create({
                name: 'spoon',
                price: 10,
                category: 'kitchen'
            })
            expect(result).toEqual(jasmine.objectContaining({
                name: 'spoon',
                price: 10,
                category: 'kitchen'
            }));
        })
    
        it('index method should return list', async() => {
            const result = await store.index();
            expect(result[0]).toEqual(jasmine.objectContaining({
                category:'kitchen'
            }))
        })
    
        it('Show method should return widget when called with ID', async () => {
            const result = await store.show('1');
            expect(result).toEqual(jasmine.objectContaining({
                category:'kitchen'
            }))
        });
       
    })

   

    
describe('Products Test Endpoints',()=>{

    beforeAll(async () => {
        await store.create({
            name: 'apple watch',
            price: 350,
            category: 'electronics.'
        });
    });

    it('Check if server runs, should return 200 status', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });

    it('Test Index should return array of products', async () => {
        const response = await request
            .get('/products/all')
        expect(response.status).toBe(200);
      
    });

    it('Test Index should return array of products', async () => {
        const response = await request
            .get('/products/1')
        expect(response.status).toBe(200);
      
    });

    it('Test Create should return created Product', async () => {
        const response = await request
            .post('/products')
            .send({
                name: 'spoon',
                price: 1,
                category: 'kitchenware.'
            });
        expect(response.status).toBe(200);
    });
})
})