"use strict";
// import Client from '../database'
// export type Weapon = {
//     id: number;
//     name: string;
//     type: string;
//     weight: number;
// }
// export class MythicalWeaponStore {
//     async index(): Promise<Weapon[]> {
//         try {
//             const conn = await Client.connect()
//             const sql = 'SELECT * FROM mythical_weapons'
//             const result = await conn.query(sql)
//             conn.release()
//             return result.rows
//         } catch (err) { 
//             throw Error(`Cannot get weapons ${err}`)
//         }        
//     }
//     async show(id: string): Promise<Weapon> {
//         try {
//             const sql = 'SELECT * FROM mythical_weapons WHERE id=($1)'
//             const conn = await Client.connect()
//             console.log(conn);
//             const result = await conn.query(sql, [id])
//             conn.release()
//             return result.rows[0]
//         } catch (err) {
//             throw new Error(`Could not get weapon ${id}. Error: ${err}`)
//         }
//     }
// }
