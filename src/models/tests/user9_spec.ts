import {User9,UserHub9} from '../../models/user9'
import client from '../../database';
import supertest from 'supertest';
import app from '../../server';
const store = new UserHub9()
const request = supertest(app);
let userToken = ''


describe('User Model', () => {
	describe('Test methods exist', () => {

        it('should have an index method',()=>{
            expect(store.index).toBeDefined()
        })
    
        it('should have show method',()=>{
            expect(store.show).toBeDefined()
        })
    
        it('should have create method',()=>{
            expect(store.create).toBeDefined();
        })

        it('Authenticate method should return authenticated user', async () => {
			const result = await store.authenticate('Test', 'test123');
			expect(result).toBeDefined;
		});


	});

    describe('User Model Test methods return correct values', () => {

        beforeAll(async()=>{
            await store.create({
                first_name: 'Test',
                last_name: 'User',
                password: 'test123'
            })
        })

    	// afterAll(async () => {
		// 	const conn = await client.connect();
		// 	const sql =
		// 		'DELETE FROM users; \nALTER SEQUENCE users_id_seq RESTART WITH 1;\n';
		// 	await conn.query(sql);
		// 	conn.release();
		// });
    
    
      
        it('Create method should return a User', async () => {
            const result = await store.create({
                first_name: 'Test',
                last_name: 'User',
                password: 'test123'
            });
            expect(result).toEqual(
                jasmine.objectContaining({
                    first_name: 'Test',
                    last_name: 'User'
                })
            );
        });
    
        it('show method should return array of users', async () => {
            const result = await store.index();
            expect(result[0]).toEqual(jasmine.objectContaining({
                first_name:'Test',
                last_name:'User'
            }))
        });
    
        it('show method should return when called with ID', async () => {
            const result = await store.show('1');
            expect(result).toEqual(
                jasmine.objectContaining(
                    {
                    first_name: 'Test',
                    last_name: 'User'
                }),
                jasmine.objectContaining(
                    {
                    first_name: 'Test',
                    last_name: 'User'
                })
            );
        });

        it('SHOULD SUCCEED --- show method should return when called with ID', async () => {
            const result = await store.show("1");
            expect(result).toEqual({
              first_name: 'Test',
              last_name: 'User'
            });  
            
          });
    
    });
    
    describe('User Model Endpoints Tests',()=>{
    
        beforeAll(async () => {
            await store.create({
                first_name: 'Test',
                last_name: 'User',
                password: 'test123'
            });
        });
    
     
		// afterAll(async () => {
		// 	const conn = await client.connect();
		// 	const sql =
		// 		'DELETE FROM users; \nALTER SEQUENCE users_id_seq RESTART WITH 1;\n';
		// 	await conn.query(sql);
		// 	conn.release();
		// });
    
        it('Check if server runs, should return 200 status', async () => {
            const response = await request.get('/');
            expect(response.status).toBe(200);
        });
    
        it('Test Index should return array of users', async () => {
            const response = await request
                .get('/users/all')
                .set('Content-type', 'application/json')
            expect(response.status).toBe(200);
        
        });
    
        it('Test create should return array of users', async () => {
            const response = await request
                .post('/users')
                .send({
                    firstName: 'Test',
                    lastName: 'User2',
                    password: 'test1234'
                });
            expect(response.status).toBe(200);
        
        });
    
        it('Test Show should return array of users', async () => {
            const response = await request
                .post('/users')
                .set('Content-type', 'application/json')
            expect(response.status).toBe(200);
        
        });
    
        
    
        it('Authenticate user and get token', async () => {
            const response = await request
                .post('/users/auth')
                .set('Content-type', 'application/json')
                .send({
                    first_name: 'Test',
                    password: 'test123'
                });
            expect(response.status).toBe(200);
    
            userToken = response.body;
        });
    })
});