"use strict";
exports.__esModule = true;
var database_1 = require("../routes/database");
var GamesController = /** @class */ (function () {
    function GamesController() {
    }
    GamesController.prototype.index = function (req, res) {
        database_1["default"].query('DESCRIBE games');
        res.json('games');
    };
    return GamesController;
}());
var gamesController = new GamesController();
exports["default"] = gamesController;
