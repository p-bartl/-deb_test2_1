"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHub9 = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = process.env.SALT_ROUNDS;
const pepper = process.env.BCRYPT_PASSWORD;
class UserHub9 {
    // returns all users
    async index() {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT first_name,last_name FROM users9';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not execute SQL command. Error: ${err}`);
        }
    }
    // returns a specified user
    async show(id) {
        try {
            //@ts-ignore
            const sql = 'SELECT first_name,last_name FROM users9 WHERE id=($1)';
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not execute SQL command for user id ${id}. Error: {err}`);
        }
    }
    // create a new user
    async create(u9) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'INSERT INTO users9(first_name,last_name,password_digest) VALUES($1,$2,$3) RETURNING  first_name,last_name';
            const hash = bcrypt_1.default.hashSync(u9.password + pepper, 
            // @ts-ignore 
            parseInt(saltRounds));
            const result = await conn.query(sql, [u9.first_name, u9.last_name, hash]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not execute SQL command for user name: ${u9.first_name}`);
        }
    }
    // autheticate an existing user
    async authenticate(first_name, password) {
        try {
            const conn = await database_1.default.connect();
            const sql = 'SELECT first_name,password_digest FROM users9 WHERE first_name=($1)';
            const result = await conn.query(sql, [first_name]);
            if (result.rows.length) {
                const user = result.rows[0];
                if (bcrypt_1.default.compareSync(password + pepper, user.password_digest)) {
                    console.log('success');
                    return user;
                }
                else {
                    console.log('password does not match database entry');
                }
            }
            return null;
        }
        catch (err) {
            throw new Error(`Could not execute SQL command for user name: ${first_name}`);
        }
    }
}
exports.UserHub9 = UserHub9;
