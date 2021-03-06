import client from '../database'

export type Product9 = {
    id?:number;
    name:string;
    price:number;
    category?:string
}

export class ProductsStore9{
    // returns all products
    async index():Promise<Product9[]>{
        try{
            //@ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT * FROM products9'
            const result = await conn.query(sql)
            conn.release()
            return result.rows
        }catch(err){
            throw new Error(`Could not execute SQL command ${err}`)
        }
    }

    // returns a specified product
    async show(id:string):Promise<Product9>{
        try{
            //@ts-ignore
            const sql = 'SELECT * FROM products9 WHERE id=($1)'
            const conn = await client.connect()
            const result =  await conn.query(sql,[id])
            conn.release()
            return result.rows[0]
        }catch(err){
            throw new Error(`Could not execute SQL command for product id ${id}. Error: ${err}`)
        }
    }

    // create a new products
    async create(p9:Product9):Promise<Product9>{
        try{
            //@ts-ignore
            const sql = 'INSERT INTO products9 (name,price,category) VALUES($1,$2,$3) RETURNING id,name,price,category'
            const conn = await client.connect()
            const result = await conn.query(sql,[p9.name,p9.price,p9.category])
            conn.release()
            return result.rows[0]
        }catch(err){
            throw new Error(`Could not execute SQL command for product name ${p9.name}. Error:${err}`)
        }
    }
}