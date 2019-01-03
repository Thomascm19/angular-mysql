"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../routes/database"));
class GamesController {
    index(req, res) {
        database_1.default.query('DESCRIBE games');
        res.json('games');
    }
    create(req, res) {
        res.json({ text: 'Create a game' });
    }
    delete(req, res) {
        res.json({ text: 'Deleting a game' });
    }
    update(req, res) {
        res.json({ text: 'Updating a game' });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
