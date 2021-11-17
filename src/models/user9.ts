import client from '../database'
import bcrypt, { compareSync } from 'bcrypt'

const saltRounds = process.env.SALT_ROUNDS
const pepper = process.env.BCRYPT_PASSWORD

export type User9 = {
    id?:number;
    first_name:string;
    last_name:string;
    password?:string;
}

export class UserHub9{

    // returns all users
    async index():Promise<User9[]>{
        try{
            //@ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT first_name,last_name FROM users9'
            const result = await conn.query(sql)
            conn.release()

            return result.rows
        }
        catch(err){
            throw new Error(`Could not execute SQL command. Error: ${err}`)
        }
    }

    // returns a specified user
    async show(id:string):Promise<User9>{
        try{
            //@ts-ignore
            const sql = 'SELECT first_name,last_name FROM users9 WHERE id=($1)'
            const conn = await client.connect()
            const result = await conn.query(sql,[id])
            conn.release()

            return result.rows[0]

        }
        catch(err){
            throw new Error(`Could not execute SQL command for user id ${id}. Error: {err}`)
        }
    }

    // create a new user
    async create(u9:User9):Promise<User9|null>{
        try{
            //@ts-ignore
            const conn = await client.connect()
            const sql = 'INSERT INTO users9(first_name,last_name,password_digest) VALUES($1,$2,$3) RETURNING  first_name,last_name'
            const hash = bcrypt.hashSync(
                u9.password! + pepper,
                // @ts-ignore 
                parseInt(saltRounds)
            )
            const result = await conn.query(sql,[u9.first_name,u9.last_name,hash])
            conn.release()

            return result.rows[0]
        }catch(err){
            throw new Error(`Could not execute SQL command for user name: ${u9.first_name}`)
        }
    }

    // autheticate an existing user
    async authenticate(first_name:string,password:string):Promise<User9 | null>{

        try{
            const conn = await client.connect()
            const sql = 'SELECT first_name,password_digest FROM users9 WHERE first_name=($1)'
            const result = await conn.query(sql,[first_name])
            if(result.rows.length){
                const user = result.rows[0]
                if(bcrypt.compareSync(password+pepper,user.password_digest)){
                    console.log('success')
                    return user
                }else{
                    console.log('password does not match database entry')
                }
            }
            return null
        }catch(err){
            throw new Error (`Could not execute SQL command for user name: ${first_name}`)
        }
        
    }
}