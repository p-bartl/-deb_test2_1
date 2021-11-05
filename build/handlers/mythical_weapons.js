"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mythical_weapon_1 = require("../models/mythical_weapon");
const store = new mythical_weapon_1.MythicalWeaponStore();
const index = async (_req, res) => {
    const weapons = await store.index();
    res.json(weapons);
};
const mythical_weapon_routes = (app) => {
    app.get('/products', index);
};
exports.default = mythical_weapon_routes;
