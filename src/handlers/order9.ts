import express, { Request, Response } from 'express'
import { Order9, OrderProduct9, OrderStore9 } from '../models/order9'
import verifyToken9 from './verifyAuthToken9'

const store = new OrderStore9();


const index = async (_req: Request, res: Response) => {
    const orders = await store.index()
    res.json(orders)
  }
  
  const show = async (req: Request, res: Response) => {
     const order = await store.show(req.params.id)
     res.json(order)
  }

  const create = async(req:Request,res:Response)=>{

    const order = {
        user_id:req.body.user_id,
        status:req.body.status,
    }
    try{
      const new_order = await store.create(order)
      res.json(new_order)
    }catch(err){
      res.status(400)
      res.json(err)
    }
  
   
}

const addOrder = async (_req: Request, res: Response) => {

    const op:OrderProduct9 = {
        order_id:parseInt(_req.params.id),
        product_id:_req.body.product_id,
        quantity:_req.body.quantity
    }
  
    try {
      const addedProduct = await store.addOrder(op)
      res.json(addedProduct)
    } catch(err) {
      res.status(400)
      res.json(err)
    }
}




const order_routes9 = (app: express.Application) => {
    app.post('/orders',verifyToken9, create)
    app.get('/orders', index)
    app.get('/orders/:id',verifyToken9, show)
    app.post('/orders/:id/products',verifyToken9, addOrder)
  }

export default order_routes9