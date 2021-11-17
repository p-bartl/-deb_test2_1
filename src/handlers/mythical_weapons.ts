// import express, { Request, Response } from 'express'
// import { Weapon, MythicalWeaponStore } from '../models/mythical_weapon'

// const store = new MythicalWeaponStore()

// const index = async (_req: Request, res: Response) => {
//     const weapons = await store.index()
//     res.json(weapons)
// }

// const show = async (req: Request, res: Response) => {
//     //const weapons = await store.show(req.body.id)
//     const weapons = await store.show(req.params.id)
//     res.json(weapons)
//  }



// const mythical_weapon_routes = (app: express.Application) => {
//   app.get('/products2', index)
//   app.get('/products2/:id', show)
// }

// export default mythical_weapon_routes