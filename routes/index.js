const { readData, writeData } = require("./parse");
const gamesRouter = require("./games");
const mainRouter = require("./main");

module.exports = { readData, writeData, gamesRouter, mainRouter };
