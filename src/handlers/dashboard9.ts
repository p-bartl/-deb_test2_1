import express, { Request, Response } from 'express'
import { DashboardQueries9 } from '../services/dashboard9'
import verifyToken9 from './verifyAuthToken9'


const dashboard_routes9 = (app: express.Application) => {
    app.get('/products-by-category', productByCategory)
    app.get('/order-by-userid',verifyToken9, orderByUserId)
    app.get('/complete-order-by-userid', verifyToken9, completedOrderByUserId)
    app.get('/five-most-popular-product', fiveMostPopularProduct)
  }

const dashboard = new DashboardQueries9();

//Products by category
const productByCategory = async (_req:Request, res: Response) => {
    const products = await dashboard.productByCategory(_req.body.category);
    res.json(products);
}

//All Orders by user
const orderByUserId = async (_req:Request, res: Response) => {
    const orders = await dashboard.orderByUserId(_req.body.user_id);
    res.json(orders);
}

//Orders with status 'active' by user
const completedOrderByUserId = async (_req:Request, res: Response) => {
    const orders = await dashboard.completedOrderByUserId(_req.body.user_id);
    res.json(orders);
}

//Top 5 most popular products
const fiveMostPopularProduct = async (_req:Request, res: Response) => {
    const products = await dashboard.fiveMostPopularProduct();
    res.json(products);
}

export default dashboard_routes9