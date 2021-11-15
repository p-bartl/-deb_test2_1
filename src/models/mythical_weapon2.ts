import Client from '../database'

export type Weapon2 = {
    id: number;
    name: string;
    type: string;
    weight: number;
}

export class MythicalWeaponStore2 {
    async index(): Promise<Weapon2[]> {
        try {
            const conn = await Client.connect()
            const sql = 'SELECT * FROM mythical_weapons2'
            const result = await conn.query(sql)
            conn.release()
            return result.rows
        } catch (err) { 
            throw Error(`Cannot get weapons ${err}`)
        }        
    }
    async show(id: string): Promise<Weapon2> {
        try {
            const sql = 'SELECT * FROM mythical_weapons2 WHERE id=($1)'
            const conn = await Client.connect()
            console.log(conn);
            const result = await conn.query(sql, [id])
            conn.release()
    
            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not get weapon ${id}. Error: ${err}`)
        }
    }

    async create(w: Weapon2): Promise<Weapon2> {
        try {
        const sql = 'INSERT INTO mythical_weapons2 (name, type, weight) VALUES($1, $2, $3) RETURNING *'
        // @ts-ignore
        const conn = await Client.connect()

        const result = await conn
            .query(sql, [w.name, w.type, w.weight])

        const weapon2 = result.rows[0]

        conn.release()

        return weapon2
        } catch (err) {
            throw new Error(`Could not add new weapon Error: ${err}`)
        }
    }

}