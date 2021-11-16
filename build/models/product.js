"use strict";
// import Client from '../database'
// export type Product = {
//     id?: string;
//     name: string;
//     price: string;
// }
// export class ProductStore {
//     async index(): Promise<Product[]> {
//         try {
//             //@ts-ignore
//             const conn = await Client.connect()
//             const sql = 'SELECT * FROM products' 
//             const result = await conn.query(sql)
//             conn.release()
//             return result.rows
//         } catch (err) {
//             throw new Error(`unable get products: ${err}`)
//         }
//     }
// }
