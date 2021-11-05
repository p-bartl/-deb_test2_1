// import express, { Request, Response } from 'express'

import { Request, Response, Application } from 'express';
import express = require('express');

import bodyParser from 'body-parser'
import mythical_weapon_routes from './handlers/mythical_weapons'
//import articles_routes from './handlers/article'


const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

mythical_weapon_routes(app)
//articles_routes(app)

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
