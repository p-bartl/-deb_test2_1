// import express, { Request, Response } from 'express'
// import { Weapon2, MythicalWeaponStore2 } from '../models/mythical_weapon2'
// import verifyAuthToken from './verifyAuthToken'
// import jwt from 'jsonwebtoken'

// const store = new MythicalWeaponStore2()

// const index = async (_req: Request, res: Response) => {
//     const weapons = await store.index()
//     res.json(weapons)
// }

// const show = async (req: Request, res: Response) => {
//     //const weapons = await store.show(req.body.id)
//     const weapons = await store.show(req.params.id)
//     res.json(weapons)
// }

// const create = async (req: Request, res: Response) => {
//     try {
//         const authorizationHeader = req.headers.authorization
//         // @ts-ignore
//         const token = authorizationHeader.split(' ')[1]
//         jwt.verify(token, process.env.TOKEN_SECRET)
//     } catch(err) {
//         res.status(401)
//         res.json('Access denied, invalid token')
//         return
//     }

//     try {
//         const weapon2: Weapon2 = {
//             name: req.body.name,
//             type: req.body.type,
//             weight: req.body.weight,
//             id: req.body.weight
//         }

//         const newWeapon2 = await store.create(weapon2)
//         res.json(newWeapon2)
//     } catch(err) {
//         res.status(400)
//         res.json(err)
//     }
// }


// const mythical_weapon_routes2 = (app: express.Application) => {
//   app.get('/products2', index)
//   app.get('/products2/:id', show)
//   app.post('/products2', verifyAuthToken, create)
// }

// export default mythical_weapon_routes2