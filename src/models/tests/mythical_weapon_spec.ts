import { Weapon, MythicalWeaponStore } from '../mythical_weapon';

const store = new MythicalWeaponStore()

describe("Book Model", () => {
    it('should have an index method', () => {
      expect(store.index).toBeDefined();
    });

    it('index method should return a list of products', async () => {
        const result = await store.index()
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