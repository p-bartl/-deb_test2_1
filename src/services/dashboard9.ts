import client from '../database'
import {Product9} from '../models/product9'
import {Order9} from '../models/order9'

export class DashboardQueries9{

    async productByCategory(category:string):Promise<Product9[]>{
        try{
            //@ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT * FROM products9 WHERE category = ($1)'
            const result = await conn.query(sql,[category])
            conn.release()

            return result.rows
        }catch(err){
            throw new Error(`unable to get products by category ${category}. Error ${err}`)
        }
    }

    async orderByUserId(userId:number):Promise<Order9[]>{
        try{
            //@ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT * FROM orders9 WHERE user_id = ($1)'
            const result = await conn.query(sql,[userId])
            conn.release()
            return result.rows
        }catch(err){
            throw new Error(`unable to get orders by user id ${userId}`)
        }
    }

    async completedOrderByUserId(userId:number):Promise<Order9[]>{
        try{
            // @ts-ignore
            const conn = await client.connect();
            const sql = 'SELECT * FROM orders9 where user_id = ($1) AND status = \'active\'';

            const result = await conn.query(sql, [userId]);
            conn.release();

            return result.rows
        }
        catch(err){
            throw new Error(`unable get completed orders by userID ${userId}: ${err}`)
        }
    }

    async fiveMostPopularProduct(): Promise<Product9[]>{
        try{
            // @ts-ignore
            const conn = await client.connect();
            const sql = 'SELECT name, price, category, SUM(quantity) FROM products9 INNER JOIN orders9 ON products9.id = orders9.product_id GROUP BY products9.id ORDER BY SUM(quantity) DESC LIMIT 5';
            const result = await conn.query(sql);
            conn.release();

            return result.rows
        }
        catch(err){
            throw new Error(`unable get five most popular products: ${err}`)
        }
    }
}