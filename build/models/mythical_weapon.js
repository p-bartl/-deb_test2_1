"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MythicalWeaponStore = void 0;
const database_1 = __importDefault(require("../database"));
class MythicalWeaponStore {
    async index() {
        try {
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM mythical_weapons';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw Error(`Cannot get weapons ${err}`);
        }
    }
    async show(id) {
        try {
            const sql = 'SELECT * FROM mythical_weapons WHERE id=($1)';
            const conn = await database_1.default.connect();
            console.log(conn);
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not get weapon ${id}. Error: ${err}`);
        }
    }
}
exports.MythicalWeaponStore = MythicalWeaponStore;
