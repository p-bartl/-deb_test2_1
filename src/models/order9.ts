import client from '../database'

export type Order9 = {
	id?: number;
	user_id: number;
	status: string;
};

export type OrderProduct9 = {
	id?: number;
	quantity: number;
	order_id: number;
	product_id: number;
};

export class OrderStore9{
    // returns all orders
    async index():Promise<Order9[]>{
        try{
            const conn = await client.connect()
            const sql = 'SELECT * FROM orders9'
            const result = await conn.query(sql)
            conn.release()
            return result.rows
        }
        catch(err){
            throw new Error(`Could not execute SQL command ${err}`)
        }
    }

    // returns a specified order
    async show(id:string):Promise<Order9>{
        try{
            const conn = await client.connect()
            const sql = 'SELECT * FROM orders9 where id=($1)'
            const result = await conn.query(sql,[id])
            conn.release()
            console.log(result.rows[0])
            return result.rows[0]
        }
        catch(err){
            throw new Error(`Could not execute SQL command for order id ${id}. Error ${err}`)
        }
    }

    // create a new order
    async create(o9:Order9):Promise<Order9>{

        try{
            const conn = await client.connect()
            const sql = 'INSERT INTO orders9(user_id,status) VALUES($1,$2) RETURNING *'
            const result = await conn.query(sql,[o9.user_id,o9.status])
            conn.release()
            return result.rows[0]
        }catch(err){
            throw new Error(`Could not execute SQL command for order id ${o9.id}. Error: ${err}`)
        }
         
    }

    // create a new product within an order (product itself must already exist)
    async addOrder(o9:OrderProduct9):Promise<OrderProduct9>{
        try {
            const sql = 'INSERT INTO order_products9(quantity,order_id,product_id) VALUES($1,$2,$3) RETURNING *'
            //@ts-ignore
            const conn = await client.connect()
      
            const result = await conn
                .query(sql, [o9.quantity, o9.order_id, o9.product_id])
      
            const order_products = result.rows[0]
      
            conn.release()
      
            return order_products
          } catch (err) {
            throw new Error(`Could not execute SQL command for product id ${o9.product_id} to order ${o9.order_id}: ${err}`)
          }
    }
}