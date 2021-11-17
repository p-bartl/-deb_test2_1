import {User9,UserHub9} from '../../models/user9'
import supertest from 'supertest';
import client from '../../database';
import app from '../../server';
const store = new UserHub9()
const request = supertest(app);
let userToken = ''


describe('Model file: User', () => {
	describe('Do the test methods exist?', () => {

        it('should have: index method',()=>{
            expect(store.index).toBeDefined()
        })
    
        it('should have: show method',()=>{
            expect(store.show).toBeDefined()
        })
    
        it('should have: create method',()=>{
            expect(store.create).toBeDefined();
        })

        it('should have: authenticate method', async () => {
			const result = await store.authenticate('TestTest', 'test123');
			expect(result).toBeDefined;
		});


	});

    describe('Does the user model return correct values?', () => {

        // Create a specified user
        beforeAll(async()=>{
            await store.create({
                first_name: 'TestTest',
                last_name: 'User',
                password: 'test123'
            })
        })
    
      
        it('create method should return: user', async () => {
            const result = await store.create({
                first_name: 'TestTest',
                last_name: 'User',
                password: 'test123'
            });
            expect(result).toEqual(
                jasmine.objectContaining({
                    first_name: 'TestTest',
                    last_name: 'User'
                })
            );
        });
    
        it('index method should return: users', async () => {
            const result = await store.index();
            expect(result[0]).toEqual(jasmine.objectContaining({
                first_name:'TestTest',
                last_name:'User'
            }))
        });
    
        it('show method should return: specified user', async () => {
            const result = await store.show('1');
            expect(result).toEqual(
                jasmine.objectContaining(
                    {
                    first_name: 'TestTest',
                    last_name: 'User'
                }),
                jasmine.objectContaining(
                    {
                    first_name: 'TestTest',
                    last_name: 'User'
                })
            );
        });
    
    });
    
    describe('Does the user model return correct values when requested via endpoint?',()=>{
    
        // Create a specified user
        beforeAll(async () => {
            await store.create({
                first_name: 'TestTest',
                last_name: 'User',
                password: 'test123'
            });
        });
    
    
        it('server should return: 200 status', async () => {
            const response = await request.get('/');
            expect(response.status).toBe(200);
        });
    
        it('index method should return: users', async () => {
            const response = await request
                .get('/users/all')
                .set('Content-type', 'application/json')
            expect(response.status).toBe(200);
        
        });
    
        it('create method should return: user', async () => {
            const response = await request
                .post('/users')
                .send({
                    first_name: 'TestTest',
                    last_name: 'User2',
                    password: 'test1234'
                });
            expect(response.status).toBe(200);
        
        });     
    
        it('authenticate method should return: token', async () => {
            const response = await request
                .post('/users/auth')
                .set('Content-type', 'application/json')
                .send({
                    first_name: 'TestTest',
                    password: 'test123'
                });
            expect(response.status).toBe(200);
    
            userToken = response.body;
        });
    })
});