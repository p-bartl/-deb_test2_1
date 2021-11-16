// import express, { Request, Response } from 'express'
// import { User, UserStore } from '../models/user'

// const store = new UserStore()

// // const index = async (_req: Request, res: Response) => {
// //     const weapons = await store.index()
// //     res.json(weapons)
// // }

// // const show = async (req: Request, res: Response) => {
// //     //const weapons = await store.show(req.body.id)
// //     const weapons = await store.show(req.params.id)
// //     res.json(weapons)
// //  }

// const create = async (_req: Request, res: Response) => {
//     try {
//         const user: User = {
//             id: _req.body.username,
//             username: _req.body.username,
//             password: _req.body.password,
//             password_digest: _req.body.username,
//         }

//         const newUser = await store.create(user)
//         res.json(newUser)
//     } catch(err) {
//         res.status(400)
//         res.json(err)
//     }
// } 

// const authenticate = async (_req: Request, res: Response) => {
//     try {    
//     const user: User = {
//         id: _req.body.username,
//         username: _req.body.username,
//         password: _req.body.password,
//         password_digest: _req.body.username,
//     }

//         const newUser = await store.authenticate(user.username, user.password)
//         res.json(newUser)
//     } catch(err) {
//         res.status(400)
//         res.json(err)
//     }
// }


// const user_routes = (app: express.Application) => {
//   app.post('/users', create)
//   app.post('/users/authenticate', authenticate)
//   //app.post('/users/authenticate', authenticate)
// }

// export default user_routes