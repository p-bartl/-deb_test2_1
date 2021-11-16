"use strict";
// import express, { Request, Response } from 'express'
// import { User2, UserStore2 } from '../models/user2'
// const store = new UserStore2()
// import jwt from 'jsonwebtoken'
// const create2 = async (req: Request, res: Response) => {
//     const user2: User2 = {
//         id: req.body.username,
//         username: req.body.username,
//         password: req.body.password,
//         password_digest: req.body.username,
//     }
//     try {
//         const newUser = await store.create(user2)
//         var token = jwt.sign({ user2: newUser }, process.env.TOKEN_SECRET);
//         res.json(token)
//     } catch(err) {
//         res.status(400)
//         // @ts-ignore
//         res.json(err + user2)
//     }
// }
// const authenticate2 = async (req: Request, res: Response) => {
//     const user2: User2 = {
//       id: req.body.username,  
//       username: req.body.username,
//       password: req.body.password,
//       password_digest: req.body.username,
//     }
//     try {
//         const u2 = await store.authenticate(user2.username, user2.password)
//         var token = jwt.sign({ user2: u2 }, process.env.TOKEN_SECRET);
//         res.json(token)
//     } catch(error) {
//         res.status(401)
//         res.json({ error })
//     }
// }
// const user2_routes = (app: express.Application) => {
//     app.post('/users2', create2)
//     app.post('/users2/authenticate', authenticate2)
//     //app.post('/users/authenticate', authenticate)
// }
// export default user2_routes
