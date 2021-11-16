"use strict";
// import Client from '../database'
// export type Order = {
//     id?: string;
//     status: string;
//     userId: string;
// }
// export class OrderStore {
//     async index(): Promise<Order[]> {
//         try {
//             //@ts-ignore
//             const conn = await Client.connect()
//             const sql = 'SELECT * FROM orders'
//             const result = await conn.query(sql)
//             conn.release()
//             return result.rows
//         } catch (err) { 
//             throw Error(`Cannot get order ${err}`)
//         }        
//     }
//     async show(id: string): Promise<Order> {
//         try {
//             const sql = 'SELECT * FROM orders WHERE id=($1)'
//             const conn = await Client.connect()
//             console.log(conn);
//             const result = await conn.query(sql, [id])
//             conn.release()
//             return result.rows[0]
//         } catch (err) {
//             throw new Error(`Could not get order ${id}. Error: ${err}`)
//         }
//     }
//     async create(o: Order): Promise<Order> {
//         try {
//         const sql = 'INSERT INTO orders (status, user_id) VALUES($1, $2) RETURNING *'
//         // @ts-ignore
//         const conn = await Client.connect()
//         const result = await conn
//             .query(sql, [o.status, o.userId])
//         const weapon2 = result.rows[0]
//         conn.release()
//         return weapon2
//         } catch (err) {
//             throw new Error(`Could not add new Order Error: ${err}`)
//         }
//     }
//     async addProduct(quantity: number, orderId: string, productId: string): Promise<Order[]> {
//         try {
//             const conn = await Client.connect()
//             const sql = 'INSERT INTO order_products (quantity, order_id, product_id) VALUES ($1, $2, $3) RETURNING *'
//             const result = await conn
//                 .query(sql, [quantity, orderId, productId])
//             const order = result.rows[0]    
//             conn.release()
//             return order
//         } catch (err) {
//             throw new Error(`Could not add product ${productId} to order ${orderId}: ${err}`)
//         }
//     }    
// }    
