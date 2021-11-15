// import express, { Request, Response } from 'express'

import { Request, Response, Application } from 'express';
import express = require('express');

import bodyParser from 'body-parser'
//import mythical_weapon_routes from './handlers/mythical_weapons'
//import articles_routes from './handlers/article'
//import user_routes from './handlers/users'
import user2_routes from './handlers/users2'
import mythical_weapon_routes2 from './handlers/mythical_weapons2'
import orderRoutes from './handlers/orders'
import productRoutes from './handlers/products'


const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

//mythical_weapon_routes(app)
//articles_routes(app)
//user_routes(app)
user2_routes(app)
mythical_weapon_routes2(app)
orderRoutes(app)
productRoutes(app)

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
