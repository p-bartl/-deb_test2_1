"use strict";
// import { Connection } from "pg"
// import { isParameterPropertyDeclaration } from "typescript"
// import Client from '../database'
// import bcrypt from 'bcrypt';
// export type User2 = {
//     id: number;
//     username: string;
//     password: string;
//     password_digest: string;
// }
// const pepper = process.env.BCRYPT_PASSWORD;
// const saltRounds = process.env.SALT_ROUNDS;
// export class UserStore2 {
//     async create(u2: User2): Promise<User2> {
//         try {
//           // @ts-ignore
//           const conn = await Client.connect()
//           const sql = 'INSERT INTO users2 (username, password_digest) VALUES($1, $2) RETURNING *'
//           const hash = bcrypt.hashSync(
//             u2.password + pepper,
//             // @ts-ignore 
//             parseInt(saltRounds)
//           );
//           const result = await conn.query(sql, [u2.username, hash])
//           const user2 = result.rows[0]
//           conn.release()
//           return user2
//         } catch(err) {
//           throw new Error(`unable create user (${u2.username}): ${err}`)
//         } 
//       }
//     async authenticate(username: string, password: string): Promise<User2 | null> {
//         const conn = await Client.connect()
//         const sql = 'SELECT password_digest FROM users2 WHERE username=($1)'
//         const result = await conn.query(sql, [username])
//         console.log(password+pepper)
//         if(result.rows.length) {
//             const user2 = result.rows[0]
//             console.log(user2)
//             if (bcrypt.compareSync(password+pepper, user2.password_digest)) {
//                 return user2
//             }
//         }
//         return null
//     }
// }
