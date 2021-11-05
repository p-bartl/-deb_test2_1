"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mythical_weapon_1 = require("../mythical_weapon");
const store = new mythical_weapon_1.MythicalWeaponStore();
describe("Book Model", () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });
    it('index method should return a list of products', async () => {
        const result = await store.index();
        expect(result).toEqual([]);
    });
    it('show method should return the correct row', async () => {
        const result = await store.show("1");
        expect(result).toEqual({
            id: 1,
            name: 'NameName',
            type: 'TypeType',
            weight: 50,
        });
    });
});
