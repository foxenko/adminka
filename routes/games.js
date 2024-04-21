const gamesRouter = require("express").Router();
const { sendAllGames, deleteGame, addGame } = require("../controllers/games");
const { getAllGames, checkIsTitleInArray } = require("../middlewares/games");

gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.delete("/games/:id", getAllGames, deleteGame);
gamesRouter.post("/games", getAllGames, checkIsTitleInArray, addGame);

module.exports = gamesRouter;
