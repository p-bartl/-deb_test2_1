import { Connection } from "pg"
import { isParameterPropertyDeclaration } from "typescript"

async create(u: User): Promise<User> {
    try {
        const conn = await Client.connect()
        const sql = 'INSERT INTO users (first_name, last_name, username'
        const hash = bcrypt.hashSync(
            u.password + pepper,
            parseInt(saltRounds)
        );
        const result = await conn.query(sql, [u.username, hash])
        const user = result.rows[0]
        
        conn.release()
        return user
    } catch(err) {
        throw new Error(`unable to create user (${u.username}): ${err}`)
    }

}